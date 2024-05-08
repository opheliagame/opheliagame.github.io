import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import ProjectBody from '../../components/project-body'
import Header from '../../components/header'
import ProjectHeader from '../../components/project-header'
import Layout from '../../components/layout'
import { getProjectBySlug, getAllProjects } from '../../lib/api'
import ProjectTitle from '../../components/project-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type ProjectType from '../../interfaces/project'
import { WEBSITE_NAME } from '../../lib/constants'
import SideNav from '../../components/side-nav'

type Props = {
  project: ProjectType
  preview?: boolean
  sideNavItems: ProjectType[]
}

export default function Project({ project, preview, sideNavItems }: Props) {
  const router = useRouter()
  const title = `${WEBSITE_NAME} | ${project.title}`
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <ProjectTitle>Loading…</ProjectTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
              </Head>
              <Header />

              <div className='md:grid md:grid-cols-article'>
                <div className='hidden md:block'>
                  <SideNav allItems={sideNavItems}></SideNav>
                </div>

                <div>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectBody content={project.content} />
                </div>
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const projects = getAllProjects(['slug', 'title'])
  const project = getProjectBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
  ])
  const content = await markdownToHtml(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content,
      },
      sideNavItems: projects
    },
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}
