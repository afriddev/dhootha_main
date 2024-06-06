
import NavBar from '@/components/re/navBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import{motion} from 'framer-motion'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:'Fininfolib',
  description: 'Generated by create next app',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
       <link rel="shortcut icon" href="https://www.fininfocom.com/assets/img/favicon/apple-touch-icon.png" />
       
       </head>
      <body
     
      className="{inter.className} bg-lB font-poppins scroll-smooth">
        <div><NavBar /></div>
        {children}
        </body>
    </html>
  )
}