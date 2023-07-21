import React from 'react'
import DogList from '@/components/doglist'
import Controller from '@/app/controller'

export default function Home() {
  return (
    <Controller>
      <DogList />
    </Controller>
  )
}
