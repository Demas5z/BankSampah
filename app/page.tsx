"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  ArrowRight,
  Award,
  Target,
  Eye,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Shield,
  Droplets,
  Hand,
  AlertTriangle,
  Phone,
  MapPin,
  Clock,
  Mail,
  Star,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useRef, useEffect } from "react"
import FocusCardsDemo from "@/components/focus-cards-demo"
import ExpandableCardDemo from "@/components/expandable-card-demo"
import Autoplay from "embla-carousel-autoplay"

export default function HomePage() {
  const [expandedSections, setExpandedSections] = useState<{ mission: boolean; vision: boolean; goals: boolean }>({
    mission: false,
    vision: false,
    goals: false,
  })

  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Perbaiki error hydration dengan menggunakan useEffect untuk kalkulasi dinamis
  const [selisihTahun, setSelisihTahun] = useState<number>(0)
  const tahunBerdiriAwal = 2010

  // Autoplay plugin for carousels
  const autoplayPlugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  const sejarahAutoplayPlugin = useRef(Autoplay({ delay: 4500, stopOnInteraction: true }))

  const carouselImages = [
    {
      src: "/HomeDashboard.jpg",
      alt: "Dashboard Utama Bank Sampah Mawar Merah",
      title: "Dashboard Utama",
      description: "Pusat koordinasi kegiatan Bank Sampah Mawar Merah",
    },
    {
      src: "/HomeImg1.jpg",
      alt: "Kegiatan Pemilahan Sampah",
      title: "Pemilahan Sampah",
      description: "Proses pemilahan sampah oleh anggota komunitas",
    },
    {
      src: "/HomeImg2.jpg",
      alt: "Sosialisasi Lingkungan",
      title: "Sosialisasi Lingkungan",
      description: "Edukasi masyarakat tentang pengelolaan sampah",
    },
    {
      src: "/HomeImg3.jpg",
      alt: "Kegiatan Daur Ulang",
      title: "Kegiatan Daur Ulang",
      description: "Mengubah sampah menjadi produk bernilai ekonomis",
    },
    {
      src: "/Program1.jpg",
      alt: "Program Pemberdayaan",
      title: "Program Pemberdayaan",
      description: "Memberdayakan masyarakat melalui pengelolaan sampah",
    },
    {
      src: "/Program2.jpg",
      alt: "Kegiatan Komunitas",
      title: "Kegiatan Komunitas",
      description: "Gotong royong membersihkan lingkungan bersama",
    },
  ]

  useEffect(() => {
    const tahunSaatIni = new Date().getFullYear()
    setSelisihTahun(tahunSaatIni - tahunBerdiriAwal)
  }, [])

  const toggleSection = (section: "mission" | "vision" | "goals") => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const pengurus = [
    { name: "Tatiek Sri Rochiati", role: "Ketua", color: "green", photo: "/TatiekSriRochiati.png" },
    { name: "Riri FS Indralin", role: "Wakil Ketua", color: "red", photo: "/RiriFSIndralin.png" },
    { name: "Indah Kurniasih", role: "Sekretaris", color: "green", photo: null },
    { name: "Sudarmiyanti", role: "Bendahara", color: "red", photo: "/Sudarmiyanti.png" },
    { name: "Dwi Yuliati", role: "Seksi Keterampilan", color: "green", photo: "/DwiYuliati.png" },
    { name: "Tyas Pujiwanti", role: "Anggota", color: "red", photo: "/TyasPujiwanti.png" },
    { name: "Nanik", role: "Anggota", color: "green", photo: "/Nanik.png" },
    { name: "Siti Khuzaemah", role: "Anggota", color: "red", photo: "/SitiKhuzaemah.png" },
    { name: "Astuti", role: "Anggota", color: "green", photo: null },
    { name: "Sriyati", role: "Anggota", color: "red", photo: "/Sriyati.png" },
    { name: "Nurjanah", role: "Anggota", color: "green", photo: "/Nurjanah.png" },
  ]

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = 320 // lebar kartu + jarak
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)

      container.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* ===== BAGIAN UTAMA ===== */}
      {/* Bagian Hero */}
      <section id="home" className="relative bg-white py-16 lg:py-24 overflow-hidden">
        {/* Elemen dekoratif latar belakang */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Membangun{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                    Masa Depan Cerah
                  </span>{" "}
                  untuk{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                    Kelurahan Tugurejo
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
                  Bank Sampah Mawar Merah berkomitmen untuk mengubah pengelolaan sampah di komunitas kami melalui
                  program daur ulang inovatif dan pendidikan lingkungan.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-base lg:text-lg"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Pelajari Lebih Lanjut <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-red-500 text-red-600 hover:bg-red-50 bg-transparent hover:border-red-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-base lg:text-lg"
                  onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Temukan Lokasi Kami
                </Button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              {/* Shadcn/UI Carousel Implementation */}
              <Carousel
                plugins={[autoplayPlugin.current]}
                className="w-full max-w-2xl mx-auto"
                onMouseEnter={autoplayPlugin.current.stop}
                onMouseLeave={autoplayPlugin.current.reset}
              >
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                        <div className="relative h-[400px] lg:h-[500px]">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                          {/* Image Title Overlay */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                              <h3 className="text-gray-900 text-lg font-semibold mb-1">{image.title}</h3>
                              <p className="text-gray-600 text-sm">{image.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/80 hover:bg-white backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" />
                <CarouselNext className="right-4 bg-white/80 hover:bg-white backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Misi, Visi, Tujuan */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Komitmen Kami untuk Lingkungan
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kami percaya dalam menciptakan solusi berkelanjutan yang bermanfaat bagi komunitas dan lingkungan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Mission */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white h-fit">
              <CardContent className="p-6 lg:p-8 text-center flex flex-col">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Target className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Misi Kami</h3>

                <div className="text-gray-600 leading-relaxed text-sm lg:text-base text-justify">
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${expandedSections.mission ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pb-4 space-y-2">
                      <div>1. Menyadarkan masyarakat akan pentingnya menjaga kebersihan lingkungan.</div>
                      <div>2. Mendukung program pemerintah dalam pengelolaan sampah.</div>
                      <div>3. Mendorong masyarakat untuk tidak membuang sampah sembarangan.</div>
                      <div>4. Mengajak warga untuk membuang sampah pada tempatnya.</div>
                      <div>5. Mencegah kebiasaan membuang sampah ke saluran air.</div>
                      <div>6. Mengedukasi masyarakat untuk tidak membakar sampah.</div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleSection("mission")}
                    className="flex items-center justify-center w-full mt-4 text-green-600 hover:text-green-700 transition-colors duration-200 font-medium"
                  >
                    {expandedSections.mission ? (
                      <>
                        Lihat Lebih Sedikit <ChevronUp className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Lihat Selengkapnya <ChevronDown className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-red-50 to-white h-fit">
              <CardContent className="p-6 lg:p-8 text-center flex flex-col">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Eye className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Visi Kami</h3>

                <div className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${expandedSections.vision ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pb-4">
                      Menciptakan lingkungan yang bersih, sehat, dan bebas polusi, serta meningkatkan kesadaran
                      masyarakat terhadap pentingnya pengelolaan sampah yang bijak dan keberlanjutan.
                    </div>
                  </div>

                  <button
                    onClick={() => toggleSection("vision")}
                    className="flex items-center justify-center w-full mt-4 text-red-600 hover:text-red-700 transition-colors duration-200 font-medium"
                  >
                    {expandedSections.vision ? (
                      <>
                        Lihat Lebih Sedikit <ChevronUp className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Lihat Selengkapnya <ChevronDown className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white md:col-span-3 lg:col-span-1 h-fit">
              <CardContent className="p-6 lg:p-8 text-center flex flex-col">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Award className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Tujuan Kami</h3>

                <div className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${expandedSections.goals ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pb-4">
                      Menyadarkan masyarakat untuk lebih peduli lingkungan. BSMM tidak hanya fokus pada pengelolaan
                      sampah, tetapi juga lingkungan secara umum karena program ini termasuk ke dalam proklim. Selain
                      itu, BSMM juga memiliki program untuk memberikan sedekah kepada kaum fakir miskin dan kaum duafa
                      dari sebagian hasil keuntungan.
                    </div>
                  </div>

                  <button
                    onClick={() => toggleSection("goals")}
                    className="flex items-center justify-center w-full mt-4 text-green-600 hover:text-green-700 transition-colors duration-200 font-medium"
                  >
                    {expandedSections.goals ? (
                      <>
                        Lihat Lebih Sedikit <ChevronUp className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Lihat Selengkapnya <ChevronDown className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ajakan Bertindak */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 via-green-500 to-red-600 relative overflow-hidden">
        {/* Pola latar belakang */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
            Bergabunglah dengan Misi Kami untuk Lingkungan yang Lebih Bersih
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-green-100 mb-8 lg:mb-12 leading-relaxed max-w-4xl mx-auto">
            Jadilah bagian dari solusi. Pelajari bagaimana Anda dapat berkontribusi pada inisiatif pengelolaan sampah
            kami dan membantu menciptakan masa depan yang berkelanjutan untuk Kelurahan Tugurejo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-base lg:text-lg font-semibold"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Tentang Kami
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-base lg:text-lg font-semibold"
              onClick={() => document.getElementById("health")?.scrollIntoView({ behavior: "smooth" })}
            >
              Panduan Kesehatan
            </Button>
          </div>
        </div>
      </section>

      {/* ===== TENTANG KAMI ===== */}
      {/* Bagian Hero Tentang Kami */}
      <section id="about" className="relative bg-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Tentang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Bank Sampah
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                Mawar Merah
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Temukan perjalanan kami, kenali pengurus kami, dan pelajari dampak positif yang kami ciptakan di Kelurahan
              Tugurejo dan sekitarnya.
            </p>
          </div>
        </div>
      </section>

      {/* Bagian Sejarah */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Shadcn/UI Carousel for Sejarah - Now on the left */}
            <div className="relative order-1 lg:order-1">
              <Carousel
                plugins={[sejarahAutoplayPlugin.current]}
                className="w-full max-w-lg mx-auto"
                onMouseEnter={sejarahAutoplayPlugin.current.stop}
                onMouseLeave={sejarahAutoplayPlugin.current.reset}
              >
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={`sejarah-${index}`}>
                      <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                        <div className="relative h-[350px] lg:h-[450px]">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={`Sejarah - ${image.alt}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                          {/* Image Title Overlay */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                              <h4 className="text-gray-900 text-base font-semibold mb-1">{image.title}</h4>
                              <p className="text-gray-600 text-xs">{image.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 bg-white/90 hover:bg-white backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 h-8 w-8" />
                <CarouselNext className="right-3 bg-white/90 hover:bg-white backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 h-8 w-8" />
              </Carousel>
            </div>

            {/* Text Content - Now on the right */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Sejarah Kami</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-base lg:text-lg">
                <p className="text-justify">
                  Bank Sampah Mawar Merah (BSMM) didirikan pada tahun 2010 di Kelurahan Tugurejo, Semarang, sebagai
                  kelanjutan dari program pemberdayaan masyarakat yang sebelumnya dijalankan oleh Badan Keswadayaan
                  Masyarakat (BKM). Tujuan utama BSMM adalah menciptakan lingkungan yang bersih dari sampah sekaligus
                  meningkatkan kesadaran masyarakat akan pentingnya pengelolaan sampah yang bijak.
                </p>
                <p className="text-justify">
                  Awalnya, kondisi lingkungan di Tugurejo cukup memprihatinkan karena kurangnya kesadaran masyarakat
                  terhadap kebersihan. BSMM hadir sebagai solusi dengan memulai kegiatan pemilahan sampah di satu RT.
                  Sampah-sampah kering seperti kardus, plastik, botol, dan kertas dikumpulkan dari rumah ke rumah,
                  dipilah, ditimbang, dan dihargai sesuai jenisnya.
                </p>
                <p className="text-justify">
                  Dipimpin oleh Ibu Tatiek sejak awal berdiri, BSMM dikelola oleh 11 anggota aktif hingga kini. Meski
                  awalnya tidak mudah mengajak warga bergabung, sosialisasi dan bukti nyata manfaatnya membuat jumlah
                  partisipasi meningkat pesat dari 58 Kartu Keluarga menjadi 599 KK yang tersebar di RW 1 dan RW 5.
                </p>
              </div>

              {/* Sorotan timeline */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-8">
                <div className="bg-green-50 p-4 lg:p-6 rounded-xl border border-green-100">
                  <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">2010</div>
                  <div className="text-sm lg:text-base text-gray-700">Didirikan oleh BKM di Tugurejo</div>
                </div>
                <div className="bg-red-50 p-4 lg:p-6 rounded-xl border border-red-100">
                  <div className="text-2xl lg:text-3xl font-bold text-red-600 mb-2">599</div>
                  <div className="text-sm lg:text-base text-gray-700">Kartu Keluarga berpartisipasi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Pengurus */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Pengurus Kami</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Tim pengurus yang berdedikasi menjalankan misi lingkungan kami.
            </p>
          </div>

          {/* Kontrol Slider */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-green-600"
              disabled={scrollPosition <= 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-green-600"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Kontainer Kartu yang Dapat Digeser */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {pengurus.map((person, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {person.photo ? (
                        <img
                          src={person.photo || "/placeholder.svg"}
                          alt={`Foto ${person.name}`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <User className="h-12 w-12 text-gray-400" />
                      )}
                    </div>
                    <div
                      className={`absolute -bottom-2 -right-2 w-8 h-8 ${person.color === "green" ? "bg-gradient-to-br from-green-500 to-green-600" : "bg-gradient-to-br from-red-500 to-red-600"} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <Star className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{person.name}</h3>
                  <p
                    className={`${person.color === "green" ? "text-green-600" : "text-red-600"} font-semibold text-sm lg:text-base`}
                  >
                    {person.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Kami - Completely Replaced with ExpandableCardDemo */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Program Kami</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Berbagai program yang kami jalankan untuk mendukung lingkungan yang lebih bersih dan pemberdayaan
              masyarakat di Kelurahan Tugurejo. Klik pada setiap program untuk mempelajari lebih detail.
            </p>
          </div>

          <ExpandableCardDemo />
        </div>
      </section>

      {/* Kegiatan Kami - Using FocusCards */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Kegiatan Kami</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Berbagai kegiatan yang kami lakukan untuk mendukung program lingkungan dan pemberdayaan masyarakat di
              Kelurahan Tugurejo.
            </p>
          </div>

          <FocusCardsDemo />
        </div>
      </section>

      {/* Bagian Preview Video */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Video Preview</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Lihat bagaimana Bank Sampah Mawar Merah mengubah lingkungan Tugurejo menjadi lebih bersih dan
              berkelanjutan.
            </p>
          </div>

          <div className="relative">
            {/* Kontainer Video dengan gaya Apple-like */}
            <div className="relative mx-auto max-w-4xl">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-600 to-red-600">
                {/* Tempat Video */}
                <div className="aspect-video bg-gradient-to-br from-green-700 to-red-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Tombol Putar */}
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-300 group shadow-lg">
                      <div className="w-0 h-0 border-l-[12px] border-l-green-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1 group-hover:scale-110 transition-transform duration-300"></div>
                    </div>
                  </div>

                  {/* Teks Overlay Video */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <h3 className="text-gray-900 text-lg font-semibold mb-2">Bank Sampah Mawar Merah</h3>
                      <p className="text-gray-600 text-sm">
                        Mengubah sampah menjadi berkah untuk lingkungan yang lebih baik
                      </p>
                    </div>
                  </div>
                </div>

                {/* Elemen Dekoratif */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full opacity-30"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-30"></div>
              </div>

              {/* Statistik Mengambang */}
              <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-green-200 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">599</div>
                  <div className="text-sm text-gray-600">Kartu Keluarga</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-red-200 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{selisihTahun}</div>
                  <div className="text-sm text-gray-600">Tahun Berdiri</div>
                </div>
              </div>
            </div>
          </div>

          {/* Ajakan Bertindak */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Tonton Video Lengkap
            </button>
          </div>
        </div>
      </section>

      {/* ===== BAGIAN KESEHATAN ===== */}
      {/* Bagian Hero Kesehatan */}
      <section id="health" className="relative bg-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Panduan Kesehatan & Keselamatan
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Keselamatan Anda adalah prioritas kami. Pelajari tentang tindakan pencegahan kesehatan dan langkah-langkah
              keselamatan untuk kegiatan pengelolaan sampah.
            </p>
          </div>
        </div>
      </section>

      {/* Peringatan Keselamatan Penting */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-red-200 bg-gradient-to-r from-red-50 to-red-100 shadow-lg">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertDescription className="text-red-800 text-base lg:text-lg">
              <strong>Penting:</strong> Selalu ikuti panduan keselamatan ini saat menangani bahan sampah. Jika Anda
              merasa tidak enak badan atau mengalami gejala setelah kegiatan penanganan sampah, segera cari pertolongan
              medis.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Bagian APD */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Alat Pelindung Diri (APD)
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Peralatan pelindung penting untuk penanganan dan pemilahan sampah yang aman.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/Protokol.png"
                  alt="APD Lengkap untuk pengelolaan sampah"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              {[
                {
                  icon: Hand,
                  title: "Sarung Tangan Pelindung",
                  description:
                    "Selalu kenakan sarung tangan tebal yang tahan tusukan saat menangani bahan sampah. Ganti sarung tangan segera jika robek atau terkontaminasi.",
                  color: "green",
                },
                {
                  icon: Shield,
                  title: "Masker Wajah",
                  description:
                    "Kenakan masker N95 atau masker bedah untuk melindungi dari debu, bau, dan partikel udara. Ganti masker secara teratur, terutama saat basah atau kotor.",
                  color: "red",
                },
                {
                  icon: Eye,
                  title: "Kacamata Keselamatan",
                  description:
                    "Lindungi mata Anda dari percikan, debu, dan puing. Penting saat memilah atau memproses bahan yang berpotensi berbahaya.",
                  color: "green",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div
                    className={`${item.color === "green" ? "bg-green-100 group-hover:bg-green-200" : "bg-red-100 group-hover:bg-red-200"} p-3 rounded-xl transition-colors duration-300`}
                  >
                    <item.icon
                      className={`h-6 w-6 lg:h-8 lg:w-8 ${item.color === "green" ? "text-green-600" : "text-red-600"}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Apron Pelindung",
                description: "Apron tahan air untuk melindungi pakaian dari kontaminasi dan tumpahan.",
                color: "green",
              },
              {
                title: "Sepatu Keselamatan",
                description: "Sepatu tertutup dengan sol anti-slip untuk melindungi kaki dari benda tajam dan cairan.",
                color: "red",
              },
              {
                title: "Penutup Rambut",
                description: "Jaga rambut tertutup untuk mencegah kontaminasi dan mempertahankan standar kebersihan.",
                color: "green",
              },
              {
                title: "Kotak P3K",
                description: "Selalu sediakan kotak P3K di dekat Anda untuk perawatan segera luka ringan.",
                color: "red",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${item.color === "green" ? "bg-gradient-to-br from-green-50 to-white" : "bg-gradient-to-br from-red-50 to-white"}`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`${item.color === "green" ? "bg-gradient-to-br from-green-500 to-green-600" : "bg-gradient-to-br from-red-500 to-red-600"} w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg lg:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm lg:text-base text-center leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Kebersihan */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Praktik Kebersihan Terbaik
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Praktik kebersihan penting untuk mempertahankan kesehatan dan mencegah kontaminasi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                    <Droplets className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Protokol Cuci Tangan</h3>
                    <ul className="space-y-3">
                      {[
                        "Cuci tangan setidaknya 20 detik dengan sabun dan air hangat",
                        "Gunakan hand sanitizer dengan kandungan alkohol minimal 60%",
                        "Cuci tangan sebelum makan, minum, atau menyentuh wajah",
                        "Selalu cuci tangan setelah melepas sarung tangan atau APD",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm lg:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                    <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Aturan Kebersihan Umum</h3>
                    <ul className="space-y-3">
                      {[
                        "Jangan pernah makan, minum, atau merokok saat menangani sampah",
                        "Ganti pakaian segera setelah kegiatan penanganan sampah",
                        "Mandi secepat mungkin setelah sesi kerja",
                        "Jaga pakaian kerja terpisah dari cucian biasa",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm lg:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/CuciTangan.jpeg"
                  alt="Teknik cuci tangan yang benar"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prosedur Darurat */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Prosedur Darurat</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Ketahui apa yang harus dilakukan dalam kasus kecelakaan atau keadaan darurat kesehatan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-red-50 to-white">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center space-x-3 text-xl lg:text-2xl">
                  <AlertTriangle className="h-6 w-6 lg:h-8 lg:w-8" />
                  <span>Dalam Kasus Cedera</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-gray-600">
                  {[
                    "Hentikan kerja segera dan evaluasi cedera",
                    "Berikan pertolongan pertama jika terlatih dan cedera ringan",
                    "Untuk cedera serius, panggil layanan darurat (119)",
                    "Bersihkan dan disinfeksi luka secara menyeluruh",
                    "Laporkan insiden kepada penyelia",
                    "Cari pertolongan medis jika gejala berlanjut",
                  ].map((step, index) => (
                    <li key={index} className="text-sm lg:text-base leading-relaxed">
                      {index + 1}. {step}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center space-x-3 text-xl lg:text-2xl">
                  <Shield className="h-6 w-6 lg:h-8 lg:w-8" />
                  <span>Paparan Bahan Berbahaya</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-gray-600">
                  {[
                    "Lepas APD yang terkontaminasi dengan hati-hati",
                    "Bilas area yang terkena dengan air bersih selama 15 menit",
                    "Lepas pakaian yang terkontaminasi",
                    "Cuci secara menyeluruh dengan sabun dan air",
                    "Cari pertolongan medis segera",
                    "Laporkan insiden paparan",
                  ].map((step, index) => (
                    <li key={index} className="text-sm lg:text-base leading-relaxed">
                      {index + 1}. {step}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== BAGIAN PETA ===== */}
      {/* Bagian Hero Peta */}
      <section id="map" className="relative bg-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Temukan Kami
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                Hubungi Kami
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kunjungi lokasi kami di Kelurahan Tugurejo atau hubungi kami untuk informasi lebih lanjut tentang program
              pengelolaan sampah dan layanan kami.
            </p>
          </div>
        </div>
      </section>

      {/* Peta dan Informasi Kontak */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Custom Map Image Container */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Lokasi Kami</h2>

              {/* Enhanced Map Container */}
              <div className="relative group">
                {/* Decorative background elements */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-500 to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                {/* Main map container */}
                <div className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100">
                  {/* Map image with aspect ratio preservation */}
                  <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
                    <img
                      src="/PetaBankSampah.jpg"
                      alt="Peta Lokasi Bank Sampah Mawar Merah di Kelurahan Tugurejo"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                    {/* Location marker overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        {/* Pulsing animation ring */}
                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                        <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-50 scale-110"></div>

                        {/* Main marker */}
                        <div className="relative bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-full p-3 shadow-lg">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Info overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-r from-green-600 to-red-600 rounded-full p-2">
                            <MapPin className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <h4 className="text-gray-900 text-sm font-semibold">Bank Sampah Mawar Merah</h4>
                            <p className="text-gray-600 text-xs">Kelurahan Tugurejo, Semarang</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive border effect */}
                  <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-transparent bg-gradient-to-r from-green-600 via-transparent to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-green-200 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">📍</div>
                    <div className="text-xs text-gray-600">Lokasi Aktif</div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1 py-6 text-base lg:text-lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  Dapatkan Petunjuk Arah
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-red-500 text-red-600 hover:bg-red-50 bg-transparent hover:border-red-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1 py-6 text-base lg:text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Telepon Kami
                </Button>
              </div>
            </div>

            {/* Informasi Kontak - keep existing content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Informasi Kontak</h2>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-green-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center space-x-3 text-xl lg:text-2xl">
                      <MapPin className="h-6 w-6 lg:h-8 lg:w-8" />
                      <span>Alamat</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                      Jl. Mawar Merah No. 15
                      <br />
                      Kelurahan Tugurejo, Kecamatan Tugu
                      <br />
                      Kota Semarang, Jawa Tengah 50151
                      <br />
                      Indonesia
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-red-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-red-600 flex items-center space-x-3 text-xl lg:text-2xl">
                      <Phone className="h-6 w-6 lg:h-8 lg:w-8" />
                      <span>Telepon & Email</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700 text-base lg:text-lg">+62 24 123-4567 (Kantor)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700 text-base lg:text-lg">+62 812-3456-7890 (Mobile)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700 text-base lg:text-lg">info@banksampahmawarmerah.org</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-green-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center space-x-3 text-xl lg:text-2xl">
                      <Clock className="h-6 w-6 lg:h-8 lg:w-8" />
                      <span>Jam Operasional</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-gray-700 text-base lg:text-lg">
                      <div className="flex justify-between items-center">
                        <span>Senin - Jumat:</span>
                        <span className="font-semibold">08:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sabtu:</span>
                        <span className="font-semibold">08:00 - 12:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Minggu:</span>
                        <span className="font-semibold text-red-600">Tutup</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
