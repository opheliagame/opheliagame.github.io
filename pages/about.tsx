import Head from "next/head"
import Layout from "../components/layout"
import Container from "../components/container"
import Intro from "../components/intro"

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{`opheliagame`}</title>
      </  Head>
      <Container>
        <Intro />
      </Container>
      
    </Layout>
  )
}

export default About