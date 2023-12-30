import Layout from '../components/layout'
import GenerativeGrid, { CSSGrid, Point, QuadTree, Rectangle } from '../components/generative-grid'
import { useEffect, useState } from 'react'



export default function Index() {

  const [data, setData] = useState(null)

  useEffect(()  => {
    let quadTree = new QuadTree(new Rectangle(200, 200, 200, 200), 2)  
    for (let i = 0; i < 10; i++) {
      let p = new Point(Math.random() * 200 * 2, Math.random() * 200 * 2)
      quadTree.insert(p)
    }
    let cssgrid = new CSSGrid(quadTree, 200*2, 200*2)
    let cssgridAreaString = cssgrid.getGridAreaString()
  
    let gridContent = [
      {title: 'opheliagame', url: '/'},
      {title: 'about', url: '/about'},
      {title: 'thoughts', url: 'https://opheliagame-notes.netlify.app/'},
      {title: 'concrete poetry', url: '/concrete-poetry'},
      {title: 'instagram', url: 'https://www.instagram.com/ophelia.game/'},
      {title: 'twitter', url: 'https://twitter.com/oopheliagame'},
      {title: 'youtube', url: 'https://www.youtube.com/channel/UCPGhpghIHB7fX3xLtlNaRFg'},
      {title: 'twitch', url: 'https://www.twitch.tv/opheliagame'}
    ]
  
    let colors =  ['#DB2B39', '#00A878', '#F3A712', '#3066BE', '#79ADDC']
  
    
    setData({
      'cssgridAreaString': cssgridAreaString, 
      'gridContent': gridContent, 
      'colors': colors
    })

  }, [])

  return (
    data ?
    <>
      <Layout>
        <GenerativeGrid cssgridAreaString={data.cssgridAreaString} gridContent={data.gridContent} colors={data.colors} />
      </Layout>
    </> : 
    <>
    </>
  )
}

