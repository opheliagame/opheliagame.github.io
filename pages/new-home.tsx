import Layout from '../components/layout'
import GenerativeGrid, { CSSGrid, QuadTree, Rectangle } from '../components/generative-grid'
import { useEffect, useReducer, useRef, useState } from 'react'
import Head from 'next/head'
import { shuffleArray } from '../lib/utils'
import Link from 'next/link'
import Container from '../components/container'
import Header from '../components/header'
import paperFull, { Path, Point } from 'paper'
import { PaperScope } from 'paper-jsdom'



export default function NewHome() {

  const [data, setData] = useState(null)
  const container = useRef(null)


  useEffect(() => {
    let gridContent = [
      { title: 'opheliagame', url: '/' },
      { title: 'about', url: '/about' },
      { title: 'thoughts', url: 'https://opheliagame-notes.netlify.app/' },
      { title: 'concrete poetry', url: '/concrete-poetry' },
      { title: 'instagram', url: 'https://www.instagram.com/ophelia.game/' },
      { title: 'twitter', url: 'https://twitter.com/oopheliagame' },
      { title: 'youtube', url: 'https://www.youtube.com/channel/UCPGhpghIHB7fX3xLtlNaRFg' },
      { title: 'twitch', url: 'https://www.twitch.tv/opheliagame' },
      { title: 'projects', url: '/projects' },
    ]
    let shuffledGridContent = shuffleArray(gridContent)

    let colors = ['#DB2B39', '#00A878', '#F3A712', '#3066BE', '#79ADDC']

    // paperjs sketch
    paperFull.setup('paper-canvas')
    let width = window.innerWidth * 3 / 4
    let height = window.innerHeight * 3 / 4

    let line = new paperFull.Path()
    line.style.strokeColor = new paperFull.Color(1, 0, 0)
    for (let k = 0; k < 10; k++) {
      let x = (Math.random() * 2 - 1) * width / 2
      let y = (Math.random() * 2 - 1) * height / 2

      line.add(new paperFull.Point(x, y))
    }
    line.smooth({ type: 'continuous' })
    line.translate(new paperFull.Point(paperFull.view.size.width / 2, paperFull.view.size.height / 2))

    let svg = paperFull.project.exportSVG()
    console.log(svg)


    if (container.current != null) {
      container.current.appendChild(svg)
    }
    setData({
    })

  }, [])
  // {/* <GenerativeGrid cssgridAreaString={data.cssgridAreaString} gridContent={data.gridContent} colors={data.colors} /> */}

  return (
    <>
      <Layout>
        <Container>
          <div className='w-full h-screen'>
            <canvas id='paper-canvas' className='invisible w-full h-screen'></canvas>
            <div ref={container} className='absolute top-0 left-0'>
            </div>
          </div>
          {/* <Header />
          <Link href='/projects'>projects</Link> */}

        </Container>
      </Layout>
    </>
  )
}

