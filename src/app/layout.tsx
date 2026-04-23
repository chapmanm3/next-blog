import { Inter } from "next/font/google"
import React from "react";
import { NavBar } from "../components/NavBar/navbar";
import { Analytics } from '@vercel/analytics/next'

import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: "swap",
  variable: '--font-inter',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="container">
          <NavBar />
          {children}
        </div>
        <Analytics/>
      </body>
    </html>
  )
}
