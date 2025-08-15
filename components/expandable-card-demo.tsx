"use client"

import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src || "/placeholder.svg"}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
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
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src || "/placeholder.svg"}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0 transition-colors duration-200"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
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
        <p>
          Program pemberdayaan komunitas Bank Sampah Mawar Merah bertujuan untuk meningkatkan kesadaran masyarakat
          tentang pengelolaan sampah yang bijak. Melalui program ini, kami mengajak warga untuk berpartisipasi aktif
          dalam kegiatan pemilahan sampah dari rumah ke rumah. <br /> <br />
          Program ini telah berhasil mengubah pola pikir masyarakat Tugurejo, dari yang awalnya kurang peduli terhadap
          kebersihan lingkungan menjadi lebih sadar akan pentingnya menjaga kelestarian lingkungan. Dengan melibatkan
          599 Kartu Keluarga, program ini telah memberikan dampak positif yang signifikan bagi lingkungan dan ekonomi
          masyarakat.
        </p>
      )
    },
  },
  {
    description: "Kegiatan Gotong Royong Lingkungan",
    title: "Gotong Royong Lingkungan",
    src: "/Program2.jpg",
    ctaText: "Pelajari",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Kegiatan gotong royong lingkungan merupakan salah satu program unggulan Bank Sampah Mawar Merah yang
          melibatkan seluruh lapisan masyarakat. Program ini dilaksanakan secara rutin untuk membersihkan lingkungan
          sekitar dan memilah sampah bersama-sama. <br /> <br />
          Melalui kegiatan ini, masyarakat tidak hanya belajar tentang pentingnya kebersihan lingkungan, tetapi juga
          mempererat tali silaturahmi antar warga. Gotong royong ini telah menjadi tradisi positif yang mengubah wajah
          Kelurahan Tugurejo menjadi lebih bersih dan asri.
        </p>
      )
    },
  },
  {
    description: "Program Edukasi untuk Generasi Muda",
    title: "Edukasi Anak & Remaja",
    src: "/Program3.jpg",
    ctaText: "Pelajari",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Program edukasi anak dan remaja dirancang khusus untuk menanamkan kesadaran lingkungan sejak dini. Melalui
          berbagai kegiatan edukatif dan menyenangkan, anak-anak dan remaja diajak untuk memahami pentingnya pengelolaan
          sampah yang benar. <br /> <br />
          Program ini meliputi workshop kreatif, permainan edukatif, dan demonstrasi langsung tentang cara memilah
          sampah. Dengan pendekatan yang menarik dan interaktif, generasi muda diharapkan dapat menjadi agen perubahan
          untuk lingkungan yang lebih bersih di masa depan.
        </p>
      )
    },
  },
  {
    description: "Pelatihan Keterampilan Daur Ulang",
    title: "Workshop Daur Ulang",
    src: "/Program4.jpg",
    ctaText: "Pelajari",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Workshop daur ulang merupakan program pelatihan yang mengajarkan masyarakat cara mengubah sampah menjadi
          produk yang bernilai ekonomis. Peserta diajarkan berbagai teknik daur ulang untuk mengolah sampah plastik,
          kertas, dan bahan lainnya menjadi kerajinan tangan yang indah. <br /> <br />
          Program ini tidak hanya memberikan manfaat lingkungan dengan mengurangi volume sampah, tetapi juga memberikan
          peluang ekonomi bagi masyarakat. Hasil kerajinan dari workshop ini dapat dijual dan menjadi sumber penghasilan
          tambahan bagi peserta.
        </p>
      )
    },
  },
  {
    description: "Sosialisasi Program Bank Sampah",
    title: "Sosialisasi Program",
    src: "/Program5.jpg",
    ctaText: "Pelajari",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Program sosialisasi dilakukan secara berkala untuk memperkenalkan konsep bank sampah kepada masyarakat luas.
          Melalui berbagai kegiatan penyuluhan, presentasi, dan diskusi interaktif, masyarakat diedukasi tentang manfaat
          dan cara kerja bank sampah. <br /> <br />
          Sosialisasi ini telah berhasil meningkatkan partisipasi masyarakat dari 58 Kartu Keluarga menjadi 599 KK.
          Program ini juga melibatkan tokoh masyarakat dan pemerintah setempat untuk memberikan dukungan penuh terhadap
          inisiatif pengelolaan sampah yang berkelanjutan.
        </p>
      )
    },
  },
  {
    description: "Pelatihan Khusus Ibu-ibu PKK",
    title: "Pelatihan Ibu-ibu PKK",
    src: "/Program6.jpg",
    ctaText: "Pelajari",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Program pelatihan khusus untuk ibu-ibu PKK bertujuan untuk memberdayakan kaum perempuan sebagai motor
          penggerak program bank sampah di tingkat rumah tangga. Pelatihan ini mencakup teknik pemilahan sampah,
          pengelolaan tabungan sampah, dan cara mengajak keluarga untuk berpartisipasi aktif. <br /> <br />
          Ibu-ibu PKK berperan sebagai kader lingkungan yang mengkoordinir kegiatan bank sampah di masing-masing RT.
          Dengan pelatihan yang komprehensif, mereka mampu menjalankan program dengan efektif dan memberikan dampak
          positif yang berkelanjutan bagi lingkungan.
        </p>
      )
    },
  },
]
