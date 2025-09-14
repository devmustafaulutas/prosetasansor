import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider"

export const metadata: Metadata = {
  title: "Asansör Çözümleri - Satış, Montaj ve Bakım Hizmetleri",
  description:
    "Yüksek standartlarda asansör satışı, montaj ve bakım hizmetleri. Uzman ekibimizle güvenilir çözümler sunuyoruz.",
  generator: "v0.app",
  keywords: "asansör, elevator, montaj, bakım, satış, güvenilir, sertifikalı",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <SmoothScrollProvider>
          <Header />
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
          <Analytics />
          <Toaster />
        </SmoothScrollProvider> 
      </body>
    </html>
  )
}
