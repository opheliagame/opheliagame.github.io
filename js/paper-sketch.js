
// TODO obsolete file
paper.install(window)
window.onload = () => {
  // Setup directly from canvas id:
	paper.setup('myCanvas');
	
  let width = window.innerWidth*3/4
  let height = window.innerHeight*3/4

  let line = new Path()
  line.style.strokeColor =  new Color(1, 0, 0)
  let np = 20
  for(let k = 0; k < np; k++) {
      let x = (Math.random()*2-1) * width/2
      let y = (Math.random()*2-1) * height/2
  
      line.add(new Point(x, y))
  }   
  line.smooth({type: 'continuous'})
  line.translate(new Point(view.size.width/2, view.size.height/2))

  let svg = project.exportSVG()
  console.log(svg)

  displaySVG(svg)

}


function displaySVG(svg) {

  document.querySelector('body').appendChild(svg)
  
  let svgDiv = document.querySelector('svg')
  let gDiv = document.querySelector('g')
  let pathDiv = document.querySelector('path')
  pathDiv.id = 'mypath'


  let gridContent = [
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
  let shuffledGridContent = shuffleArray(gridContent)
  // adding text to paperjs line
  for(let i = 0; i < shuffledGridContent.length; i++) {
    let item = shuffledGridContent[i]

    let textDiv = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    let textPathDiv = document.createElementNS('http://www.w3.org/2000/svg', 'textPath')
    textPathDiv.setAttribute('href', '#mypath')
    textPathDiv.setAttribute('startOffset', i*200)
   
    let linkDiv = document.createElementNS('http://www.w3.org/2000/svg', 'a')
    linkDiv.setAttribute('href', item.url)
    linkDiv.setAttribute('target', '_blank')

    textPathDiv.innerHTML = item.title
    textDiv.appendChild(textPathDiv)

    linkDiv.appendChild(textDiv)
    svgDiv.appendChild(linkDiv)

  }

}

function shuffleArray(array) {
  return array
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
}
