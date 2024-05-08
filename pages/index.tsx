import Layout from '../components/layout'
import { useEffect, useRef } from 'react'
import paperFull from 'paper'
import { drawPaperSketch, drawSVG } from '../lib/paperSketch'
import SideNav from '../components/side-nav'
import ProjectType from '../interfaces/project'
import { getAllProjects } from '../lib/api'

type Props = {
  allItems: ProjectType[]
}

export default function Index({ allItems }: Props) {
  const container = useRef(null)

  useEffect(() => {
    paperFull.setup('paper-canvas')
    let svgString = drawPaperSketch()
    if (container.current != null) {
      container.current.appendChild(svgString)
    }

    drawSVG()

  }, [])

  return (
    <>
      <Layout>
        <div className='w-screen md:h-screen'>
          <canvas id='paper-canvas' className='invisible absolute top-0 left-0 w-full h-screen'></canvas>

          <div className='w-full h-full flex flex-col md:grid md:grid-cols-home'>
            <div className='md:pt-8 md:px-8'>
              <SideNav allItems={allItems}></SideNav>

            </div>

            <div ref={container} className=''>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allItems = getAllProjects(['slug', 'title'])
  return {
    props: { allItems }
  }
}