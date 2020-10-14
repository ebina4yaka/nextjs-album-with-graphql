import React from 'react'
import Hero from '../organisms/Hero'
import AlbumCardList from '../organisms/AlbumCardList'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

export default function Index(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AlbumCardList />
      </main>
      <Footer />
    </>
  )
}
