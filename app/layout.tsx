import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ErrorBoundary from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bank Sampah Mawar Merah - Waste Management Tugurejo Village",
  description:
    "Community-based waste management and recycling programs in Tugurejo Village, Semarang. Creating a cleaner environment through sustainable practices.",
  keywords: "waste management, recycling, environment, community, Tugurejo, Semarang, Bank Sampah",
  authors: [{ name: "Bank Sampah Mawar Merah" }],
  creator: "Bank Sampah Mawar Merah",
  publisher: "Bank Sampah Mawar Merah",
  robots: "index, follow",
  openGraph: {
    title: "Bank Sampah Mawar Merah - Waste Management Tugurejo Village",
    description: "Community-based waste management and recycling programs in Tugurejo Village, Semarang.",
    url: "https://banksampahmawarmerah.org",
    siteName: "Bank Sampah Mawar Merah",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank Sampah Mawar Merah - Waste Management Tugurejo Village",
    description: "Community-based waste management and recycling programs in Tugurejo Village, Semarang.",
  },
  generator: "v0.dev",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <ErrorBoundary>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
