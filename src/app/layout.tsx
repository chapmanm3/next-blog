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
  authors: [{ name: "Matt Chapman" }],
  keywords: ["web developer", "Boston", "Next.js", "React", "blog", "technology"],
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
        alt: 'Matt Chapman - Web Developer',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matt Chapman',
    description: "The personal site for Matt Chapman, a web developer from Boston, MA.",
    images: ['/og-image.png'],
    site: '@mattchapman',
    creator: '@mattchapman',
  },
  other: {
    'theme-color': '#000000',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const baseUrl = process.env.SITE_URL || 'http://localhost:3000'

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Matt Chapman",
    "url": baseUrl,
    "jobTitle": "Web Developer",
    "homeLocation": {
      "@type": "Place",
      "name": "Boston, MA"
    },
    "sameAs": [
      "https://github.com/chapmanm3",
      "https://linkedin.com/in/matt-chapman1"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Matt Chapman",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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
