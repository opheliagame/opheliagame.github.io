import Link from "next/link"
import ProjectType from "../interfaces/project"
import { getAllProjects } from "../lib/api"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import ProjectTitle from "../components/project-title"
import ProjectBackground from "../components/project-background"

type Props = {
  allProjects: ProjectType[]
}

const Projects = ({ allProjects }: Props) => {
  console.log(allProjects)

  return (
    <section>
      <Layout>
        <Container>
          <Header />
          <div className="container">
            {allProjects.map((project, index) => (
                <Link href={`/projects/${project.slug}`} key={index} className="flex justify-start relative">
                  <ProjectBackground>
                    <ProjectTitle>{project.title}</ProjectTitle>

                  </ProjectBackground>

                </Link>

            ))}
          </div>

        </Container>
      </Layout>
    </section>
  )

}

export const getStaticProps = async () => {
  const allProjects = getAllProjects(['slug', 'title', 'content', 'year'])
  return {
    props: { allProjects }
  }
}

export default Projects