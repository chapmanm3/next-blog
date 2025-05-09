import { Metadata } from "next";
import { Miriam_Libre } from "next/font/google"
import React from "react";
import NavBar from "../components/NavBar/navbar";

import '../styles/globals.css'

const miriamLibre = Miriam_Libre({
  subsets: ['latin'],
  display: "swap"
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={miriamLibre.className}>
      <body>
        <div className="container">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
