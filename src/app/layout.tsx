import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang='en'>
      <Head>
        <title>DogHub</title>
      </Head>
      <Navbar reRender={null}/>
      {children}
    </div>
  )
}