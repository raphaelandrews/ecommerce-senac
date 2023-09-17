import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import ToasterProvider from '@/providers/ToasterProvider'
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookstore',
  description: 'Mini Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <ToasterProvider />
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
