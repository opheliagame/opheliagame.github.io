import { useRouter } from "next/router"
import Poem from "../../interfaces/poem"
// import Layout from "../../components/layout"
// import Container from "../../components/container"
import ErrorPage from 'next/error'
// import SketchEmbed from "../../components/sketch-embed"
// import { getAllPoems, getPoemBySlug } from "../../lib/api"
// import Header from "../../components/header"

type Props = {
  poem: Poem
}

// const Poem = ({poem}: Props) => {
//   const router = useRouter()
//   const title = `${poem.title}`

//   if (!router.isFallback && !poem?.slug) {
//     return <ErrorPage statusCode={404} />
//   }

//   return (
//     <Layout>
//       <Container>
//         <Header />
//         <SketchEmbed src={poem.src} />
//       </Container>
//     </Layout>
//   )
// }

// type Params = {
//   params: {
//     slug: string
//   }
// }

// export async function getStaticProps({params }: Params) {
//   const poem = getPoemBySlug(params.slug)
//   return {
//     props: {
//       poem: poem
//     }
//   }
// }

// export async function getStaticPaths() {
//   const posts = getAllPoems()

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       }
//     }),
//     fallback: false,
//   }
// }

const PoemPage = ({poem}: Props) => {
  const router = useRouter()
  // const title = `${poem.title}`

  if (!router.isFallback && !poem?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div></div>
  )
}

export default PoemPage