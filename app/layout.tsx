import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bank Sampah Mawar Merah - Waste Management Tugurejo Village",
  description:
    "Community-based waste management and recycling programs in Tugurejo Village, Semarang. Creating a cleaner environment through sustainable practices.",
  keywords: "waste management, recycling, environment, community, Tugurejo, Semarang, Bank Sampah",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
