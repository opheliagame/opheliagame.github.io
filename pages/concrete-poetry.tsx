import Link from "next/link";
import Poem from "../interfaces/poem";
import { getAllPoems } from "../lib/api";
import Layout from "../components/layout";
import Container from "../components/container";
import Header from "../components/header";

type Props = {
  allPoems: Poem[]
}

const Poems = ({allPoems}: Props) => {
  return (
    <section>
      <Layout>
        <Container>
        <Header />
        {
        allPoems.map((poem) => (
          <li key={poem.slug} className="list-none">
            <Link  href={'/poems/'+poem.slug} >{poem.title}</Link>

          </li>
        ))}
  </Container>
      </Layout>
      

      
    </section>
  )

}

export const getStaticProps = async () => {
  const allPoems = getAllPoems()

  return {
    props: {allPoems}
  }
}

export default Poems;