import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children,}: {children: React.ReactNode}) {
  const [cartLength, setCartLength] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('myItemsKey');
    setCartLength(storedItems ? JSON.parse(storedItems) : [])
  }, [])

  return (
    <div lang='en'>
      <Head>
        <title>DogHub</title>
      </Head>
      <Navbar reRender={cartLength.length}/>
      {children}
    </div>
  )
}