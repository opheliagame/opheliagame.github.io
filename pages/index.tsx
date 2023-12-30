import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Link from 'next/link'
import GenerativeGrid from '../components/generative-grid'

type Props = {
  allPosts: Post[]
}

export default function Index({}: Props) {

  return (
    <>
      <Layout>
        <GenerativeGrid />
      </Layout>
    </>
  )
}

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//   ])

//   return {
//     props: { allPosts },
//   }
// }
