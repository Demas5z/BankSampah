import { Mail, MapPin, Phone, Recycle, Heart, Leaf } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-800 via-green-700 to-green-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Organization Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="bg-white p-3 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <img
                  src="/logoBSMM.png"
                  alt="Logo Bank Sampah Mawar Merah"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl lg:text-2xl">Bank Sampah Mawar Merah</h3>
                <p className="text-green-200 text-sm lg:text-base">Kelurahan Tugurejo</p>
              </div>
            </div>
            <p className="text-green-100 text-sm lg:text-base leading-relaxed">
              Berkomitmen untuk menciptakan lingkungan yang lebih bersih melalui pengelolaan sampah berbasis komunitas dan program daur ulang yang bermanfaat bagi komunitas dan generasi mendatang.
            </p>
            <div className="flex items-center space-x-2 text-green-200">
              <Heart className="h-5 w-5 text-red-400" />
              <span className="text-sm lg:text-base">Melayani komunitas sejak 2010</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-xl lg:text-2xl mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/health", label: "Health Guidelines" },
                { href: "/map", label: "Location & Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-green-100 hover:text-white transition-all duration-300 flex items-center space-x-2 group text-sm lg:text-base"
                  >
                    <Leaf className="h-4 w-4 text-green-300 group-hover:text-white transition-colors duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-xl lg:text-2xl mb-6">Informasi Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-green-300 mt-1 group-hover:text-white transition-colors duration-300" />
                <div>
                  <span className="text-green-100 text-sm lg:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                    Jl. Tugurejo Tim. XI No.1, Tugurejo
                    <br />
                    Kec. Tugu, Kota Semarang, Jawa Tengah 50182
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-green-300 group-hover:text-white transition-colors duration-300" />
                <span className="text-green-100 text-sm lg:text-base group-hover:text-white transition-colors duration-300">
                  +62 896-5372-0581
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-green-300 group-hover:text-white transition-colors duration-300" />
                <span className="text-green-100 text-sm lg:text-base group-hover:text-white transition-colors duration-300">
                  info@banksampahmawarmerah.org
                </span>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-green-700/50 p-4 lg:p-6 rounded-xl border border-green-600/30">
              <h5 className="font-semibold text-white mb-3 text-base lg:text-lg">Jam Operasional</h5>
              <div className="space-y-2 text-green-100 text-sm lg:text-base">
                <div className="flex justify-between">
                  <span>Sen - Jum:</span>
                  <span>08:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu:</span>
                  <span>08:00 - 12:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600/30 mt-12 pt-8 text-center">
          <p className="text-green-200 text-sm lg:text-base">
            © {new Date().getFullYear()} Bank Sampah Mawar Merah. Semua hak dilindungi. Dibuat dengan{" "}
            <Heart className="inline h-4 w-4 text-red-400 mx-1" />
            untuk lingkungan kami.
          </p>
        </div>
      </div>
    </footer>
  )
}
