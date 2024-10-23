import { mobileCheck, shuffleArray } from "../lib/utils"

export class Point {
  x: number
  y: number

  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

export class Rectangle {
  x: number
  y: number
  w: number
  h: number

  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }

  contains(point) {
    return (
      point.x >= this.x - this.w
      && point.x <= this.x + this.w
      && point.y >= this.y - this.h
      && point.y <= this.x + this.y)
  }
}

export class QuadTree {
  boundary: Rectangle
  capacity: number
  points: Array<Point>
  divided: boolean
  leafnodes: Array<QuadTree>
  topleft: QuadTree
  topright: QuadTree
  bottomleft: QuadTree
  bottomright: QuadTree
  children: Array<QuadTree>
  smallestQuad: QuadTree

  constructor(boundary, capacity) {
    this.boundary = boundary
    this.capacity = capacity
    this.points = []
    this.divided = false
    this.leafnodes = []
  }

  subdivide() {
    let x = this.boundary.x
    let y = this.boundary.y
    let w = this.boundary.w
    let h = this.boundary.h
    let tl = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2)
    this.topleft = new QuadTree(tl, this.capacity)
    let tr = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2)
    this.topright = new QuadTree(tr, this.capacity)
    let bl = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2)
    this.bottomleft = new QuadTree(bl, this.capacity)
    let br = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2)
    this.bottomright = new QuadTree(br, this.capacity)
    this.children = [this.topleft, this.topright, this.bottomleft, this.bottomright]
    this.divided = true
  }

  insert(point) {

    if (!this.boundary.contains(point)) return false

    if (this.points.length < this.capacity) {
      this.points.push(point)
      return true
    } else {
      if (!this.divided) {
        this.subdivide()
      }

      if (this.topleft.insert(point)) return true
      if (this.topright.insert(point)) return true
      if (this.bottomleft.insert(point)) return true
      if (this.bottomright.insert(point)) return true
    }
  }

  getSmallestQuad() {
    if (!this.children) {
      return this
    }

    let options = this.children.map(c => c.getSmallestQuad())
    let widths = options.map(c => c.boundary.w)

    let smallest = Math.min(...widths)
    this.smallestQuad = options.filter(c => c.boundary.w === smallest)[0]
    return this.smallestQuad
  }

  getLeafNodes() {
    if (!this.children) return []

    let leafnodes: any[] = []
    this.children.forEach(c => {
      if (!c.children) leafnodes.push(c)
      let childLeaves = c.getLeafNodes()
      leafnodes.push(...childLeaves)
    })

    return leafnodes
  }

  getCSSTemplate(grid, alpha) {
    let root = grid.qtree
    let edge = grid.cellw
    let n = grid.rows
    let template = grid.template
    if (!this.children) {
      let x1 = root.boundary.w * 2
      let x2 = (this.boundary.x - this.boundary.w)
      let xindex = Math.floor(n - (x1 - x2) / (edge * 2))

      let y1 = root.boundary.h * 2
      let y2 = (this.boundary.y - this.boundary.h)
      let yindex = Math.floor(n - (y1 - y2) / (edge * 2))

      let span = this.boundary.w / edge - 1
      for (let i = 0; i <= span; i++) {
        for (let j = 0; j <= span; j++) {
          template[xindex + i][yindex + j] = alpha
        }
      }
      return
    }

    // return this.children.forEach(c => c.getCSSTemplate(root, edge, n, template, alpha))

  }
}

export class CSSGrid {
  qtree: QuadTree
  width: number
  height: number
  rows: number
  cols: number
  template: Array<Array<number>>
  gridIDs: Array<string>
  cellh: number
  cellw: number
  nCells: number
  leafNodes: Array<QuadTree>

  constructor(qtree, width, height) {
    this.qtree = qtree
    this.width = width
    this.height = height

    this.rows = this.findRows()
    this.cols = this.findCols()

    this.template = new Array(this.cols).fill(0).map(a => new Array(this.rows).fill(0))
    this.gridIDs = []
  }

  findRows() {
    let rowHeight = this.qtree.getSmallestQuad().boundary.h * 2
    this.cellh = rowHeight / 2
    return this.height / rowHeight
  }

  findCols() {
    let colWidth = this.qtree.getSmallestQuad().boundary.w * 2
    this.cellw = colWidth / 2
    return this.width / colWidth
  }

  buildCSSTemplate() {
    console.log('inside gridjs func')
    // if(this.gridIDs.length > 0) return

    let chars = "abcdefghijklmnopqrstuvwxyz"
    this.gridIDs = new Array(this.nCells).fill(0).map((e, i) => chars[i])
    // let template = {}
    // leafNodes.forEach((e, i) => {
    //   let letter = chars[i]
    //   template[letter] = Math.pow(e.boundary.w/this.cellw, 2)
    // });


    this.leafNodes.forEach((c, i) => {
      c.getCSSTemplate(this, this.gridIDs[i])
    })
    console.log(this.gridIDs)
  }

  getGridAreaString() {
    this.leafNodes = this.qtree.getLeafNodes()
    this.nCells = this.leafNodes.length
    this.buildCSSTemplate()
    return this.template.map(l => `'${l.join(' ')}'`).join(' ')
  }

}

function GenerativeGridItem({ item, style }) {
  const title = item.title ?? ''
  const url = item.url ?? ''
  const date = item.date ?? ''
  const thumbnail = item.thumbnail ?? ''

  return (
    <a href={url}
      className="relative flex-none flex flex-row flex-wrap bg-white cursor-pointer" style={style}>
        {/* <svg viewBox="0 0 100 100" className="w-full h-full">
        <text x="0" y="0" className="text-3xl font-display">
          {title.split('').map((l, index) => (<span key={index}>{l}</span>))}
        </text>
      </svg> */}

        {/* {title.split('').map((l, index) => (<p key={index} className="flex-initial">{l}</p>))} */}
      
      <div className="absolute relative top-0 left-0 w-full h-full object-cover">
        <video className="w-full h-full object-cover" src={thumbnail} autoPlay muted loop></video>
        <div className="absolute bottom-0 left-0 flex flex-row flex-wrap align-center text-slate-100 text-sm">
          <p className="">{title}</p>
        </div>
      </div>

    </a>

  )
}

export default function GenerativeGrid({ cssgridAreaString, gridContent, colors }) {

  let gridAreas = shuffleArray('abcdefghijklmnopqrstuvwxyz'.substring(0, 10).split(''))

  let color = colors[Math.floor(Math.random()*colors.length)]
  return (
    <div
      style={{ display: 'grid', width: '100vw', height: '100vh', gridTemplateAreas: cssgridAreaString, backgroundColor: color }}>
      {gridContent.map((cell, index) => {
        return (
          <GenerativeGridItem key={index} item={cell} style={{gridArea: gridAreas[index]}} />
        )
      })}
    </div>
  )

}
