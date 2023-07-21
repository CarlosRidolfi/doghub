import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DogHub',
  description: 'Desafio da empresa HomeHub',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {children}
    </html>
  )
}