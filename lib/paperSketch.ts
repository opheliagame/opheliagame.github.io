import paperFull, { Path, Point, Color } from 'paper'
import { mobileCheck, shuffleArray } from './utils'

export const drawPaperSketch = (): string | SVGElement => {
  let isMobile = mobileCheck()
  let width = window.innerWidth * (isMobile ? 3 / 4 : 3/5) 
  let height = window.innerHeight * 3 / 4

  let line = new Path()
  line.style.strokeColor = new Color(1, 0, 0)
  line.style.strokeWidth = 3
  let np = isMobile ? 20 : 30
  for (let k = 0; k < np; k++) {
    let x = (Math.random() * 2 - 1) * width / 2
    let y = (Math.random() * 2 - 1) * height / 2

    line.add(new Point(x, y))
  }
  line.smooth({ type: 'continuous' })
  line.translate(new paperFull.Point(paperFull.view.size.width / 2, paperFull.view.size.height / 2))

  let svg = paperFull.project.exportSVG()
  return svg

}

export const drawSVG = () => {
  let svgDiv = document.querySelector('svg')
  svgDiv?.setAttribute('width', '100%')
  svgDiv?.setAttribute('height', '100%')
  let gDiv = document.querySelector('g')
  let pathDiv = document.querySelector('path')
  if(pathDiv != null) pathDiv.id = 'mypath'


  let mainLinks = [
    {title: 'opheliagame', url: '/'},
    {title: 'about', url: '/about'},
    {title: 'thoughts', url: 'https://opheliagame-notes.netlify.app/'},
    {title: 'concrete poetry', url: '/concrete-poetry'},
    {title: 'instagram', url: 'https://www.instagram.com/ophelia.game/'},
    {title: 'twitter', url: 'https://twitter.com/oopheliagame'},
    {title: 'youtube', url: 'https://www.youtube.com/channel/UCPGhpghIHB7fX3xLtlNaRFg'},
    {title: 'twitch', url: 'https://www.twitch.tv/opheliagame'},
    {title: 'projects', url: '/projects'},
  ]
  mainLinks = shuffleArray(mainLinks)

  // adding text to paperjs line
  for(let i = 0; i < mainLinks.length; i++) {
    let item = mainLinks[i]

    let textDiv = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    textDiv.setAttribute('dy', '-6')
    textDiv.classList.add('svg-text')
    let textPathDiv = document.createElementNS('http://www.w3.org/2000/svg', 'textPath')
    textPathDiv.setAttribute('href', '#mypath')
    textPathDiv.setAttribute('startOffset', `${i*200}`)
   
    let linkDiv = document.createElementNS('http://www.w3.org/2000/svg', 'a')
    linkDiv.setAttribute('href', item.url)
    linkDiv.setAttribute('target', '_blank')

    textPathDiv.innerHTML = item.title
    textDiv.appendChild(textPathDiv)

    linkDiv.appendChild(textDiv)
    svgDiv?.appendChild(linkDiv)

  }


} 