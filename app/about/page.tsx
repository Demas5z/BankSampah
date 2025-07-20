import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar, Heart, Leaf, Recycle, Users, Star } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
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
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Bank Sampah
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                Mawar Merah
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our journey, meet our founders, and learn about the positive impact we're making in Tugurejo
              Village and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-base lg:text-lg">
                <p>
                  Bank Sampah Mawar Merah was founded in 2019 by a group of environmentally conscious residents of
                  Tugurejo Village who were concerned about the growing waste problem in their community. What started
                  as a small initiative has grown into a comprehensive waste management program.
                </p>
                <p>
                  The name "Mawar Merah" (Red Rose) symbolizes our commitment to beauty and growth - just as roses bloom
                  from the earth, we believe beautiful communities can flourish through proper waste management and
                  environmental stewardship.
                </p>
                <p>
                  Over the years, we have evolved from a simple collection point to a full-service waste bank that not
                  only manages recyclables but also educates the community about sustainable living practices and
                  environmental conservation.
                </p>
              </div>

              {/* Timeline highlights */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-8">
                <div className="bg-green-50 p-4 lg:p-6 rounded-xl border border-green-100">
                  <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">2019</div>
                  <div className="text-sm lg:text-base text-gray-700">Founded by community leaders</div>
                </div>
                <div className="bg-red-50 p-4 lg:p-6 rounded-xl border border-red-100">
                  <div className="text-2xl lg:text-3xl font-bold text-red-600 mb-2">150+</div>
                  <div className="text-sm lg:text-base text-gray-700">Active members today</div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Bank+Sampah+Founding+Ceremony"
                  alt="Bank Sampah Mawar Merah founding ceremony"
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

      {/* Founders Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Meet Our Founders</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              The visionary leaders who started our environmental mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Ibu Sari Wijaya",
                role: "Founder & Director",
                color: "green",
                description:
                  "A former teacher with 20 years of experience in community development. Ibu Sari's passion for environmental education drives our mission.",
              },
              {
                name: "Bapak Ahmad Hidayat",
                role: "Co-Founder & Operations Manager",
                color: "red",
                description:
                  "An environmental engineer who brings technical expertise to our waste management processes and recycling innovations.",
              },
              {
                name: "Ibu Dewi Kartika",
                role: "Co-Founder & Community Liaison",
                color: "green",
                description:
                  "A community organizer who ensures our programs reach every household and maintains strong relationships with local stakeholders.",
              },
            ].map((founder, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={`/placeholder.svg?height=200&width=200&text=${founder.name.replace(" ", "+")}`}
                      alt={founder.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <div
                      className={`absolute -bottom-2 -right-2 w-12 h-12 ${founder.color === "green" ? "bg-gradient-to-br from-green-500 to-green-600" : "bg-gradient-to-br from-red-500 to-red-600"} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <Star className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p
                    className={`${founder.color === "green" ? "text-green-600" : "text-red-600"} font-semibold mb-4 text-base lg:text-lg`}
                  >
                    {founder.role}
                  </p>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{founder.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Environmental Impact
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              How we're making a difference for our planet and future generations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
            <div className="space-y-6 lg:space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-green-600">Protecting Our Environment</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Leaf,
                    title: "Waste Reduction",
                    description: "Diverted over 15 tons of waste from landfills annually",
                  },
                  {
                    icon: Recycle,
                    title: "Recycling Programs",
                    description: "Processing plastic, paper, metal, and organic waste efficiently",
                  },
                  {
                    icon: Award,
                    title: "Recognition",
                    description: 'Awarded "Best Community Initiative" by Semarang City Government',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                      <item.icon className="h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-base lg:text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Environmental+Impact+Statistics"
                  alt="Environmental impact statistics"
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

      {/* Community Impact */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Community Impact</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Empowering our community through education, employment, and environmental awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Community+Participation"
                  alt="Community participation in waste management"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-red-600">Strengthening Our Community</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Community Engagement",
                    description: "Over 150 active members from 80+ households participating",
                  },
                  {
                    icon: Heart,
                    title: "Economic Benefits",
                    description: "Generated over Rp 50 million in community savings through our programs",
                  },
                  {
                    icon: Calendar,
                    title: "Regular Programs",
                    description: "Monthly workshops, weekly collections, and quarterly community events",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-red-100 p-3 rounded-xl group-hover:bg-red-200 transition-colors duration-300">
                      <item.icon className="h-6 w-6 lg:h-8 lg:w-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-base lg:text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
