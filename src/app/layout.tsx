import { Inter } from "next/font/google"
import React from "react";
import { NavBar } from "../components/NavBar/navbar";
import { Analytics } from '@vercel/analytics/next'
import { Metadata } from "next";

import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: "swap",
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Matt Chapman",
    template: "%s | Matt Chapman"
  },
  description: "The personal site for Matt Chapman, a web developer from Boston, MA.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.SITE_URL,
    siteName: 'Matt Chapman',
    title: 'Matt Chapman',
    description: "The personal site for Matt Chapman, a web developer from Boston, MA.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matt Chapman',
    description: "The personal site for Matt Chapman, a web developer from Boston, MA.",
    images: ['/og-image.png']
  }
}

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
