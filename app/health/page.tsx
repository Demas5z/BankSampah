import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Shield, Droplets, Hand, Eye, AlertTriangle, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function HealthPage() {
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
                Health & Safety
              </span>{" "}
              Guidelines
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your safety is our priority. Learn about essential health precautions and safety measures for waste
              management activities.
            </p>
          </div>
        </div>
      </section>

      {/* Important Safety Alert */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-red-200 bg-gradient-to-r from-red-50 to-red-100 shadow-lg">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertDescription className="text-red-800 text-base lg:text-lg">
              <strong>Important:</strong> Always follow these safety guidelines when handling waste materials. If you
              feel unwell or experience any symptoms after waste handling activities, seek medical attention
              immediately.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* PPE Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Personal Protective Equipment (PPE)
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Essential protective gear for safe waste handling and sorting activities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Complete+PPE+for+Waste+Management"
                  alt="Complete PPE for waste management"
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
                  title: "Protective Gloves",
                  description:
                    "Always wear thick, puncture-resistant gloves when handling any waste materials. Replace gloves immediately if torn or contaminated.",
                  color: "green",
                },
                {
                  icon: Shield,
                  title: "Face Masks",
                  description:
                    "Wear N95 or surgical masks to protect against dust, odors, and airborne particles. Change masks regularly, especially when wet or soiled.",
                  color: "red",
                },
                {
                  icon: Eye,
                  title: "Safety Goggles",
                  description:
                    "Protect your eyes from splashes, dust, and debris. Essential when sorting or processing potentially hazardous materials.",
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
                title: "Protective Apron",
                description: "Waterproof apron to protect clothing from contamination and spills.",
                color: "green",
              },
              {
                title: "Safety Boots",
                description: "Closed-toe, non-slip boots to protect feet from sharp objects and liquids.",
                color: "red",
              },
              {
                title: "Hair Cover",
                description: "Keep hair covered to prevent contamination and maintain hygiene standards.",
                color: "green",
              },
              {
                title: "First Aid Kit",
                description: "Always have a first aid kit nearby for immediate treatment of minor injuries.",
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

      {/* Hygiene Tips */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Hygiene Best Practices
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Essential hygiene practices to maintain health and prevent contamination.
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
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Hand Washing Protocol</h3>
                    <ul className="space-y-3">
                      {[
                        "Wash hands for at least 20 seconds with soap and warm water",
                        "Use hand sanitizer with at least 60% alcohol content",
                        "Wash hands before eating, drinking, or touching your face",
                        "Always wash hands after removing gloves or PPE",
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
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">General Hygiene Rules</h3>
                    <ul className="space-y-3">
                      {[
                        "Never eat, drink, or smoke while handling waste",
                        "Change clothes immediately after waste handling activities",
                        "Shower as soon as possible after work sessions",
                        "Keep work clothes separate from regular laundry",
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
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Proper+Hand+Washing+Technique"
                  alt="Proper hand washing technique"
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

      {/* Emergency Procedures */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Emergency Procedures
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Know what to do in case of accidents or health emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-red-50 to-white">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center space-x-3 text-xl lg:text-2xl">
                  <AlertTriangle className="h-6 w-6 lg:h-8 lg:w-8" />
                  <span>In Case of Injury</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-gray-600">
                  {[
                    "Stop work immediately and assess the injury",
                    "Apply first aid if trained and injury is minor",
                    "For serious injuries, call emergency services (119)",
                    "Clean and disinfect any wounds thoroughly",
                    "Report the incident to supervisors",
                    "Seek medical attention if symptoms persist",
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
                  <span>Exposure to Hazardous Materials</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-gray-600">
                  {[
                    "Remove contaminated PPE carefully",
                    "Rinse affected area with clean water for 15 minutes",
                    "Remove contaminated clothing",
                    "Wash thoroughly with soap and water",
                    "Seek immediate medical attention",
                    "Report the exposure incident",
                  ].map((step, index) => (
                    <li key={index} className="text-sm lg:text-base leading-relaxed">
                      {index + 1}. {step}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl lg:text-2xl font-bold text-yellow-800 mb-6">Emergency Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-yellow-700">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-5 w-5 text-yellow-600" />
                  <strong className="text-base lg:text-lg">Emergency Services</strong>
                </div>
                <div className="text-sm lg:text-base">119 (Fire/Medical)</div>
                <div className="text-sm lg:text-base">110 (Police)</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-yellow-600" />
                  <strong className="text-base lg:text-lg">Local Health Center</strong>
                </div>
                <div className="text-sm lg:text-base">Puskesmas Tugurejo</div>
                <div className="text-sm lg:text-base">(024) 123-4567</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-5 w-5 text-yellow-600" />
                  <strong className="text-base lg:text-lg">Bank Sampah Emergency</strong>
                </div>
                <div className="text-sm lg:text-base">Ibu Sari Wijaya</div>
                <div className="text-sm lg:text-base">+62 812-3456-7890</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
