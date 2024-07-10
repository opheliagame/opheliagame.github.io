import Container from "../components/container"
import GenerativeGrid, { CSSGrid, Point, QuadTree, Rectangle } from "../components/generative-grid"
import Header from "../components/header"
import Layout from "../components/layout"
import { mobileCheck } from "../lib/utils"

export default function LiveCoding (props) {
  return (
    <section>
      <Layout>
       
        <GenerativeGrid cssgridAreaString={props.cssgridAreaString} gridContent={props.gridContent} colors={props.colors}/>

        
      </Layout>
    </section>

  )
}


export async function getStaticProps() {
  let isMobile = mobileCheck()
  let width = isMobile ? 50 : 200
  let height = isMobile ? width * 2 : width
  let quadTree = new QuadTree(new Rectangle(width, width, width, height), 2)  
  for (let i = 0; i < 10; i++) {
    let p = new Point(Math.random() * width * 2, Math.random() * height * 2)
    quadTree.insert(p)
  }
  let cssgrid = new CSSGrid(quadTree, width*2, height*2)
  let cssgridAreaString = cssgrid.getGridAreaString()

  const liveCodingPerformances = [
    {
      title: 'estuary jam with @khoparzi!', 
      url: 'https://www.youtube.com/watch?v=BtwSCEAGCEI', 
      thumbnail: '/assets/live-coding/thumbnails/AT-cm_puKNvigiFDy5MmL4BWjg5g.webm',
      date: '2024/06/19',
    },
    {
      title: 'estuary jam with @khoparzi!', 
      url: 'https://www.youtube.com/watch?v=BtwSCEAGCEI', 
      thumbnail: '/assets/live-coding/thumbnails/vod-2176023166-offset-2550.webm',
      date: '2024/06/19',
    },
    {
      title: 'Estuary birthday stream with @khoparzi 🥳❤️', 
      url: 'https://www.youtube.com/watch?v=x1y15-Od8Jw', 
      thumbnail: '/assets/live-coding/thumbnails/vod-1994133496-offset-1678.webm',
      date: '2023/12/04',
    },
    {
      title: 'Estuary birthday stream with @khoparzi 🥳❤️', 
      url: 'https://www.youtube.com/watch?v=x1y15-Od8Jw', 
      thumbnail: '/assets/live-coding/thumbnails/vod-1994133496-offset-1766.webm',
      date: '2023/12/04',
    },
    {
      title: 'Algorave India: Third Anniversary Party', 
      url: 'https://www.youtube.com/live/bViDWh7mOnA?si=6YhG9wdNCdu2uoKx&t=4076', 
      thumbnail: '/assets/live-coding/thumbnails/画面収録 2024-07-02 19.11.01.webm',
      date: '2021/05/12',
    },
    {
      title: 'TOPLAP Asia Stream May 2024 - Algorave India - 2024-05-25 11:00', 
      url: 'https://youtu.be/L0gH9Zvbnw0?si=-7r7n9rSpSr2jVsF&t=144', 
      thumbnail: '/assets/live-coding/thumbnails/画面収録 2024-07-02 19.22.24.webm',
      date: '2024/05/25',
    },
    {
      title: 'estuary jam with @beatnyk!', 
      url: 'https://www.youtube.com/watch?v=hiGCGHO1PWI', 
      thumbnail: '/assets/live-coding/thumbnails/画面収録 2024-07-02 19.31.31.webm',
      date: '2024/05/08',
    },
  ]

  let colors =  ['#DB2B39', '#00A878', '#F3A712', '#3066BE', '#79ADDC']

  return {
    props: {
      'cssgridAreaString': cssgridAreaString, 
      'gridContent': liveCodingPerformances,
      'colors': colors
    }
  }
}


{/* <Header />

<section className="max-w-2xl mx-auto">
  <ul className="list-disc my-12 underline underline-offset-2 decoration-[#3066BE]">
    <li>
      <a href="https://www.youtube.com/live/bViDWh7mOnA?si=6YhG9wdNCdu2uoKx&t=4076">Algorave India: Third Anniversary Party</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=7RUlqoI1khY">Solstice Stream December 2023 - Algorave India Open Jam - 2023-12-21 11:00</a>
    </li>
    <li>
      <a href="https://youtu.be/x1y15-Od8Jw?si=rERiYS50Ozc9p3fn">Estuary birthday stream with @khoparzi 🥳❤️</a>
    </li>
    <li>
      <a href="https://youtu.be/vN8mWzEHzEA?si=bj1QftTxmArP62zQ">Estuary jam session with @beatnyk</a>
    </li>
    <li>
      <a href="https://www.youtube.com/live/9jNpkXMjk5w?si=Q8oZXMyRs7vYoM9z">Livecoding performance - Ophelia.Game, Beatnyk, Okbaj and Khoparzi at Dreamy Place - 23 Oct, 2023</a>
    </li>
  </ul>

  <h2 className="text-2xl my-2">In Person</h2>
  <ul className="list-disc">
    <li>
      Walkin Studios 2022/10/10
    </li>
    <li>
      Noiseoiseoise 2022/12/16
    </li>
    <li>
      Tokyo Tech Meetup 2023/04/25
    </li>
    <li>
      Noiseoiseoise 2023/12/24
    </li>
  </ul>
</section> */}