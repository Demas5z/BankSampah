import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Leaf, Recycle, Users, Award, Target, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-red-50 py-16 lg:py-24 overflow-hidden">
        {/* Background decorative elements */}
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
                  Building a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                    Cleaner Future
                  </span>{" "}
                  for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                    Tugurejo Village
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Bank Sampah Mawar Merah is dedicated to transforming waste management in our community through
                  innovative recycling programs and environmental education.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-base lg:text-lg"
                >
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-red-500 text-red-600 hover:bg-red-50 bg-transparent hover:border-red-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-base lg:text-lg"
                >
                  <Link href="/map">Find Our Location</Link>
                </Button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Community+Waste+Management"
                  alt="Community waste management activities"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">150+</div>
                    <div className="text-sm text-gray-600">Active Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Our Commitment to the Environment
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe in creating sustainable solutions that benefit both our community and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Mission */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Target className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed flex-grow text-sm lg:text-base">
                  To reduce waste in Tugurejo Village through community-based recycling programs, environmental
                  education, and sustainable waste management practices.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-red-50 to-white">
              <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Eye className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed flex-grow text-sm lg:text-base">
                  To become a model waste management organization that inspires other communities to adopt sustainable
                  practices and create a cleaner, healthier environment.
                </p>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white md:col-span-3 lg:col-span-1">
              <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Award className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Our Goals</h3>
                <p className="text-gray-600 leading-relaxed flex-grow text-sm lg:text-base">
                  To engage 100% of households in our recycling program, reduce village waste by 70%, and create
                  economic opportunities through waste-to-value initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Our Environmental Impact
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Making a real difference in our community, one step at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Recycle, value: "2,500kg", label: "Waste Recycled Monthly", color: "green", delay: "0s" },
              { icon: Users, value: "150+", label: "Active Members", color: "red", delay: "0.1s" },
              { icon: Leaf, value: "60%", label: "Waste Reduction", color: "green", delay: "0.2s" },
              { icon: Heart, value: "5", label: "Years of Service", color: "red", delay: "0.3s" },
            ].map((stat, index) => (
              <div key={index} className="text-center group" style={{ animationDelay: stat.delay }}>
                <div
                  className={`${stat.color === "green" ? "bg-gradient-to-br from-green-500 to-green-600" : "bg-gradient-to-br from-red-500 to-red-600"} w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  <stat.icon className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                </div>
                <div
                  className={`text-2xl lg:text-4xl font-bold ${stat.color === "green" ? "text-green-600" : "text-red-600"} mb-2 lg:mb-3`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm lg:text-base font-medium px-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 via-green-500 to-red-600 relative overflow-hidden">
        {/* Background pattern */}
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
            Join Our Mission for a Cleaner Environment
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-green-100 mb-8 lg:mb-12 leading-relaxed max-w-4xl mx-auto">
            Be part of the solution. Learn how you can contribute to our waste management initiatives and help create a
            sustainable future for Tugurejo Village.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-base lg:text-lg font-semibold"
            >
              <Link href="/about">Get Involved</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-base lg:text-lg font-semibold"
            >
              <Link href="/health">Health Guidelines</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
