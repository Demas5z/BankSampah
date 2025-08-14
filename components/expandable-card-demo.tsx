"use client"

import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOutsideClick } from "@/hooks/use-outside-click"

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 shadow-lg"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src || "/placeholder.svg"}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-gray-900 dark:text-neutral-200 text-lg"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-gray-600 dark:text-neutral-400 text-sm"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    rel="noreferrer"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-6 flex flex-col md:flex-row justify-between items-center hover:bg-gradient-to-r hover:from-green-50 hover:to-red-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-gray-100 hover:border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
            >
              <div className="flex gap-6 flex-col md:flex-row items-center">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    width={100}
                    height={100}
                    src={card.src || "/placeholder.svg"}
                    alt={card.title}
                    className="h-40 w-40 md:h-16 md:w-16 rounded-xl object-cover shadow-lg"
                  />
                </motion.div>
                <div className="text-center md:text-left">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-bold text-gray-900 dark:text-neutral-200 text-lg mb-2"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-6 py-3 text-sm rounded-full font-bold bg-gray-100 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-500 hover:text-white text-gray-700 mt-4 md:mt-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}

const cards = [
  {
    description: "Program Pemberdayaan Masyarakat",
    title: "Pemberdayaan Komunitas",
    src: "/Program1.jpg",
    ctaText: "Pelajari",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-justify">
            Program pemberdayaan masyarakat Bank Sampah Mawar Merah bertujuan untuk meningkatkan kesadaran dan
            partisipasi aktif warga dalam pengelolaan sampah. Program ini melibatkan seluruh lapisan masyarakat dari
            berbagai usia.
          </p>
          <p className="text-justify">
            Melalui program ini, kami mengajarkan teknik pemilahan sampah yang benar, cara mengolah sampah organik
            menjadi kompos, dan mengubah sampah anorganik menjadi produk bernilai ekonomis. Setiap peserta mendapat
            pelatihan komprehensif tentang manfaat ekonomi dan lingkungan dari pengelolaan sampah yang baik.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Manfaat Program:</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Meningkatkan pendapatan keluarga</li>
              <li>• Mengurangi volume sampah rumah tangga</li>
              <li>• Menciptakan lingkungan yang lebih bersih</li>
              <li>• Membangun kesadaran lingkungan</li>
            </ul>
          </div>
        </div>
      )
    },
  },
  {
    description: "Kegiatan Gotong Royong Komunitas",
    title: "Gotong Royong Lingkungan",
    src: "/Program2.jpg",
    ctaText: "Pelajari",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-justify">
            Kegiatan gotong royong merupakan tradisi yang kami lestarikan dalam program kebersihan lingkungan. Setiap
            minggu, warga berkumpul untuk membersihkan area RT/RW dan melakukan pemilahan sampah bersama-sama.
          </p>
          <p className="text-justify">
            Kegiatan ini tidak hanya membersihkan lingkungan, tetapi juga mempererat tali silaturahmi antar warga. Kami
            mengorganisir pembersihan saluran air, pengumpulan sampah door-to-door, dan penanaman pohon di area komunal.
          </p>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-800 mb-2">Jadwal Kegiatan:</h4>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Setiap Minggu pagi (07:00 - 09:00)</li>
              <li>• Pembersihan saluran air bulanan</li>
              <li>• Penanaman pohon setiap 3 bulan</li>
              <li>• Sosialisasi rutin setiap bulan</li>
            </ul>
          </div>
        </div>
      )
    },
  },
  {
    description: "Program Edukasi Lingkungan untuk Generasi Muda",
    title: "Edukasi Anak & Remaja",
    src: "/Program3.jpg",
    ctaText: "Pelajari",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-justify">
            Program edukasi khusus untuk anak-anak dan remaja bertujuan menanamkan kesadaran lingkungan sejak dini. Kami
            menggunakan metode pembelajaran yang menyenangkan dan interaktif.
          </p>
          <p className="text-justify">
            Kegiatan meliputi workshop kreatif membuat kerajinan dari sampah daur ulang, permainan edukatif tentang
            lingkungan, dan kompetisi kebersihan antar kelas. Program ini bekerja sama dengan sekolah-sekolah di sekitar
            Tugurejo.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Target Peserta:</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Anak usia 6-12 tahun (SD)</li>
              <li>• Remaja usia 13-18 tahun (SMP-SMA)</li>
              <li>• Kelompok bermain dan PAUD</li>
              <li>• Karang taruna setempat</li>
            </ul>
          </div>
        </div>
      )
    },
  },
  {
    description: "Workshop Daur Ulang dan Keterampilan",
    title: "Workshop Daur Ulang",
    src: "/Program4.jpg",
    ctaText: "Pelajari",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-justify">
            Workshop daur ulang mengajarkan teknik mengubah sampah menjadi produk bernilai ekonomis. Peserta belajar
            membuat berbagai kerajinan tangan dari botol plastik, kardus, dan bahan bekas lainnya.
          </p>
          <p className="text-justify">
            Produk yang dihasilkan meliputi tas belanja dari plastik bekas, pot tanaman dari botol, hiasan rumah dari
            kardus, dan masih banyak lagi. Hasil karya dapat dijual untuk menambah penghasilan keluarga.
          </p>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-800 mb-2">Produk Unggulan:</h4>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Tas belanja dari plastik bekas</li>
              <li>• Pot tanaman dari botol plastik</li>
              <li>• Hiasan dinding dari kardus</li>
              <li>• Tempat pensil dari kaleng bekas</li>
            </ul>
          </div>
        </div>
      )
    },
  },
  {
    description: "Program Sosialisasi dan Penyuluhan",
    title: "Sosialisasi Program",
    src: "/Program5.jpg",
    ctaText: "Pelajari",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-justify">
            Program sosialisasi dilakukan secara rutin untuk meningkatkan partisipasi masyarakat dalam program bank
            sampah. Kami mengunjungi rumah-rumah warga, mengadakan pertemuan RT/RW, dan presentasi di berbagai acara
            komunitas.
          </p>
          <p className="text-justify">
            Sosialisasi mencakup penjelasan tentang manfaat bank sampah, cara kerja sistem tabungan sampah, jenis-jenis
            sampah yang dapat ditabung, dan dampak positif bagi lingkungan dan ekonomi keluarga.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Metode Sosialisasi:</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Kunjungan door-to-door</li>
              <li>• Pertemuan RT/RW bulanan</li>
              <li>• Presentasi di acara komunitas</li>
              <li>• Media sosial dan brosur</li>
            </ul>
          </div>
        </div>
      )
    },
  },
  {
    description: "Pelatihan Keterampilan Ibu-ibu PKK",
    title: "Pelatihan Ibu-ibu PKK",
    src: "/Program6.jpg",
    ctaText: "Pelajari",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-justify">
            Program khusus untuk ibu-ibu PKK yang fokus pada pelatihan keterampilan mengelola sampah rumah tangga.
            Pelatihan meliputi teknik komposting, pembuatan eco-enzyme, dan pengolahan sampah organik menjadi pupuk.
          </p>
          <p className="text-justify">
            Ibu-ibu juga dilatih untuk menjadi agen perubahan di lingkungan masing-masing, mengajarkan tetangga tentang
            pentingnya pemilahan sampah dan cara mengurangi produksi sampah rumah tangga.
          </p>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-800 mb-2">Materi Pelatihan:</h4>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Teknik komposting rumah tangga</li>
              <li>• Pembuatan eco-enzyme</li>
              <li>• Pengolahan sampah organik</li>
              <li>• Mengurangi penggunaan plastik</li>
            </ul>
          </div>
        </div>
      )
    },
  },
]
