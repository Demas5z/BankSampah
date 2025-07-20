import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Mail, MapPin, Phone, Calendar, Users, Car, Bus, Smartphone } from "lucide-react"

export default function MapPage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-red-50 py-16 lg:py-24 overflow-hidden">
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
                Find Us
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                Get in Touch
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Visit our location in Tugurejo Village or contact us for more information about our waste management
              programs and services.
            </p>
          </div>
        </div>
      </section>

      {/* Map and Contact Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Interactive Map */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Our Location</h2>
              <div className="bg-gray-100 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2!2d110.3!3d-7.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDAnMDAuMCJTIDExMMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bank Sampah Mawar Merah Location"
                  className="lg:h-96"
                ></iframe>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1 py-6 text-base lg:text-lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-red-500 text-red-600 hover:bg-red-50 bg-transparent hover:border-red-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1 py-6 text-base lg:text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Contact Information</h2>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-green-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center space-x-3 text-xl lg:text-2xl">
                      <MapPin className="h-6 w-6 lg:h-8 lg:w-8" />
                      <span>Address</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                      Jl. Mawar Merah No. 15
                      <br />
                      Tugurejo Village, Tugu District
                      <br />
                      Semarang City, Central Java 50151
                      <br />
                      Indonesia
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-red-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-red-600 flex items-center space-x-3 text-xl lg:text-2xl">
                      <Phone className="h-6 w-6 lg:h-8 lg:w-8" />
                      <span>Phone & Email</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700 text-base lg:text-lg">+62 24 123-4567 (Office)</span>
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
                      <span>Operating Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-gray-700 text-base lg:text-lg">
                      <div className="flex justify-between items-center">
                        <span>Monday - Friday:</span>
                        <span className="font-semibold">8:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Saturday:</span>
                        <span className="font-semibold">8:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sunday:</span>
                        <span className="font-semibold text-red-600">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services and Programs */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Our Services & Programs
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Learn about our various waste management services and community programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Calendar,
                title: "Weekly Collection",
                description: "Regular waste collection service for registered households every Tuesday and Friday.",
                schedule: "7:00 AM - 11:00 AM",
                color: "green",
              },
              {
                icon: Users,
                title: "Community Workshops",
                description: "Monthly educational workshops on waste sorting, composting, and environmental awareness.",
                schedule: "First Saturday of each month",
                color: "red",
              },
              {
                icon: MapPin,
                title: "Drop-off Center",
                description: "24/7 drop-off point for sorted recyclable materials with secure storage containers.",
                schedule: "Main facility entrance",
                color: "green",
              },
              {
                icon: Users,
                title: "Savings Program",
                description: "Earn money by depositing recyclable materials. Track your contributions and earnings.",
                schedule: "Rp 5,000 per transaction",
                color: "red",
              },
              {
                icon: Calendar,
                title: "Composting Training",
                description: "Learn how to create nutrient-rich compost from organic waste for your garden.",
                schedule: "2-hour sessions",
                color: "green",
              },
              {
                icon: Phone,
                title: "Consultation Service",
                description: "Free consultation on waste management solutions for homes and small businesses.",
                schedule: "Call or visit our office",
                color: "red",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${service.color === "green" ? "bg-gradient-to-br from-green-50 to-white" : "bg-gradient-to-br from-red-50 to-white"}`}
              >
                <CardHeader>
                  <CardTitle
                    className={`${service.color === "green" ? "text-green-600" : "text-red-600"} flex items-center space-x-3 text-lg lg:text-xl`}
                  >
                    <service.icon className="h-6 w-6 lg:h-8 lg:w-8" />
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm lg:text-base leading-relaxed">{service.description}</p>
                  <div className="text-sm lg:text-base text-gray-500">
                    <strong>Details:</strong> {service.schedule}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get There */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">How to Get There</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Easy directions to reach our facility using various transportation methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center space-x-3 text-xl lg:text-2xl">
                  <Bus className="h-6 w-6 lg:h-8 lg:w-8" />
                  <span>By Public Transportation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 text-sm lg:text-base">
                  <li>• Take Trans Semarang Bus to Tugurejo Terminal</li>
                  <li>• Walk 5 minutes south on Jl. Tugurejo</li>
                  <li>• Turn right on Jl. Mawar Merah</li>
                  <li>• Our facility is on the left side (No. 15)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-red-50 to-white">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center space-x-3 text-xl lg:text-2xl">
                  <Car className="h-6 w-6 lg:h-8 lg:w-8" />
                  <span>By Private Vehicle</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 text-sm lg:text-base">
                  <li>• From Semarang city center: 15 minutes</li>
                  <li>• Take Jl. Kaligawe towards Tugurejo</li>
                  <li>• Turn left at Tugurejo intersection</li>
                  <li>• Free parking available on-site</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center space-x-3 text-xl lg:text-2xl">
                  <Smartphone className="h-6 w-6 lg:h-8 lg:w-8" />
                  <span>By Online Transportation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 text-sm lg:text-base">
                  <li>• Gojek/Grab available in the area</li>
                  <li>• Use "Bank Sampah Mawar Merah" as destination</li>
                  <li>• Alternative: "Jl. Mawar Merah No. 15, Tugurejo"</li>
                  <li>• Estimated fare from city center: Rp 15,000-25,000</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
