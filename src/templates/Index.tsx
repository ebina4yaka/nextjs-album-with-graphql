import React from 'react'
import Hero from '../organisms/Hero'
import AlbumCardList from '../organisms/AlbumCardList'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'
import { Post } from '../libs/models'

type Props = {
  posts: Post[]
}

export default function Index(props: Props): React.ReactElement {
  const { posts } = props
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AlbumCardList posts={posts} />
      </main>
      <Footer />
    </>
  )
}
