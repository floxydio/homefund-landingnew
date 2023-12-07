import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HomeFunding - Investasi Terbaikmu',
  description: 'Find your best investasi',
  icons: {
    icon: '/Logo.png',
  },
  keywords: ['HomeFunding', 'Investasi', 'Rumah', 'Properti', 'Saham', 'Murah', 'Jakarta', 'Indonesia', 'Depok']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
