import Layout from '../components/layout'
import { useEffect, useRef } from 'react'
import paperFull from 'paper'
import { drawPaperSketch, drawSVG } from '../lib/paperSketch'


export default function Index() {
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
        <div className='w-screen h-screen'>
          <canvas id='paper-canvas' className='invisible w-full h-screen'></canvas>
          <div ref={container} className='absolute top-0 left-0'>
          </div>
        </div>
      </Layout>
    </>
  )
}

