import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children,}: {children: React.ReactNode}) {
  const [cartLength, setCartLength] = useState<string | null>(null);

  useEffect(() => {
    setCartLength(localStorage.getItem('CartLength'))
  }, [])

  return (
    <div lang='en'>
      <Head>
        <title>DogHub</title>
      </Head>
      <Navbar reRender={cartLength}/>
      {children}
    </div>
  )
}