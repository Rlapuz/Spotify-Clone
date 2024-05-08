import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import {Providers} from './nextUIProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify - Web Player: Music for everyone',
  description: 'Created by Raymund P. Lapuz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          {/* <Providers> */}
            {children}
          {/* </Providers> */}
        </body>
    </html>
  )
}
