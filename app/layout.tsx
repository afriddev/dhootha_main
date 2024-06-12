import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:'DoothaPromotions',
  description: 'Welcome to DoothaPromotions! Our mission is to help businesses and individuals promote their products and services through professional website building and video creation. We offer a wide range of promotional services designed to boost your online presence and engage your audience effectively.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
       <link rel="shortcut icon" href="favIcon.jpg" className='h-4 w-4 rounded-full'  />
       <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
    />
       </head>
      <body
     
      className="{inter.className} bg-lB font-poppins scroll-smooth">
        {children}
        </body>
    </html>
  )
}
