import { fabric } from 'fabric';
import { mobileCheck } from './utils';

interface MindMapData {
  // nodes: string[];
  connections: [string, string][];
}

const mindMapData: MindMapData = {
  connections: [
    ["sketching", "lines"],
    ["sketching", "movement"],
    ["sketching", "color"],
    ["lines", "movement"],
    ["sketching", "writing code"],
    ["sketching", "type"],
    ["sketching", "live coding"],
    ["writing code", "shaders"],
    ["shaders", "live coding"],
    ["movement", "design"],
    ["type", "design"],
    ["type", "text"],
    ["connecting things", "text"],
    ["type", "concrete poetry"],
    ["type", "drawing type"],
    ["text", "concrete poetry"],
    ["movement", "concrete poetry"],
  ]
};

interface Particle {
  pos: { x: number, y: number };
  radius: number;
  gridCell?: { col: number, row: number };
  intersects(particle: Particle): boolean;
}

class Grid {
  cellSize: number;
  numCols: number;
  numRows: number;
  cells: Particle[][][];

  constructor(canv_wid: number, canv_hei: number, s: number) {
    this.cellSize = s;

    this.numCols = Math.ceil(canv_wid / s);
    this.numRows = Math.ceil(canv_hei / s);

    this.cells = [];

    for (let x = 0; x < this.numCols; x++) {
      this.cells[x] = [];
      for (let y = 0; y < this.numRows; y++) {
        this.cells[x][y] = [];
      }
    }
  }

  addParticle(particle: Particle): void {
    let col_idx = Math.floor(particle.pos.x / this.cellSize);
    let row_idx = Math.floor(particle.pos.y / this.cellSize);

    if (this.cells[col_idx] && this.cells[col_idx][row_idx]) {
      this.cells[col_idx][row_idx].push(particle);
      particle.gridCell = { col: col_idx, row: row_idx };
    }
  }

  removeParticle(particle: Particle): void {
    if (particle.gridCell) {
      let { col: col_idx, row: row_idx } = particle.gridCell;
      let cell = this.cells[col_idx][row_idx];
      let arr_idx = cell.indexOf(particle);
      cell.splice(arr_idx, 1);
    }
  }

  getNeighbors(particle: Particle): Particle[] {
    let top_left = [
      Math.floor((particle.pos.x - particle.radius*2) / this.cellSize),
      Math.floor((particle.pos.y - particle.radius*2) / this.cellSize),
    ];

    let bottom_right = [
      Math.floor((particle.pos.x + particle.radius*2) / this.cellSize),
      Math.floor((particle.pos.y + particle.radius*2) / this.cellSize),
    ];

    let neighbors: Particle[] = [];
    for (let i = top_left[0]; i <= bottom_right[0]; i++) {
      for (let j = top_left[1]; j <= bottom_right[1]; j++) {
        if (i < 0 || j < 0 || i >= this.numCols || j >= this.numRows) continue;
        let c = this.cells[i][j];
        for (let p of c) {
          if (p !== particle) neighbors.push(p);
        }
      }
    }

    return neighbors;
  }
}


class FabricElement {
  canvas: fabric.Canvas;

  constructor(canvas: fabric.Canvas) {
    this.canvas = canvas;
  }
}

class Node extends FabricElement implements Particle {
  name: string;
  pos: {x: number, y: number} = {x: 0, y: 0};
  radius: number;
  fabricElement: fabric.Text;
  lines: Array<{ line: Line, top: boolean }>;
  connectedNodes: Array<Node>;

  constructor(grid: Grid, canvas: fabric.Canvas, name: string) {
    super(canvas)
    this.name = name;
    
    this.radius = this.name.length*6
    this.pos = this.getPosition(grid, 50)
    grid.addParticle(this)

    const circle = new fabric.Circle({
      radius: this.radius,
      // fill: '#eef',
      // scaleY: 0.9,
      fill: '#fff',
      // opacity: 0.8,
      stroke: '#000',
      strokeWeight: 2,
      originX: 'center',
      originY: 'center'
    });

    let isMobile = mobileCheck()
    const text = new fabric.Text(name, {
      fontFamily: 'Mansalva',
      fontSize: isMobile ? 24 : 32,
      fill: 'black',
      // fontWeight: isMobile ? 'light' : 'normal',
      originX: 'center',
      originY: 'center'
    });

    this.fabricElement = new fabric.Group([ text ], {
      left: this.pos.x,
      top: this.pos.y,
      angle: Math.random() * Math.PI
    });

    this.fabricElement.hasControls = this.fabricElement.hasBorders = false;
    this.fabricElement.on('mouseover', () => onNodeMouseOver(this))
    this.fabricElement.on('mouseout', () => onNodeMouseOut(this))
    this.lines = [];
    this.connectedNodes = [];
    (this.fabricElement as any).lines = [];
  }

  getPosition(grid: Grid, count: number): {x: number, y: number} {
    
    this.pos.x = Math.floor((Math.random() * 0.8 + 0.1) * (width));
    this.pos.y = Math.floor((Math.random() * 0.8 + 0.1) * (height));

    // get position of node using Grid class 
    const neighbours = grid.getNeighbors(this)
    const intersectsAny = neighbours.some(n => {
      return this.intersects(n)
    })
    if(count > 0 && intersectsAny) {
      return this.getPosition(grid, count-1)
    }
    return this.pos;
  }

  intersects(particle: Particle): boolean {
    const dx = Math.abs(this.pos.x - particle.pos.x)
    const dy = Math.abs(this.pos.y - particle.pos.y)
    const dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
    if(dist <= (this.radius + particle.radius)) {
      return true
    }
    else {
      return false
    }

  }

  connectToLine(line: Line, top: boolean = true) {
    this.lines.push({ line, top });
    (this.fabricElement as any).lines.push({ line, top });
  }

  connectToNode(node: Node) {
    this.connectedNodes.push(node)
  }

  addToCanvas() {
    console.log(`adding node at x: ${this.pos.x} y: ${this.pos.y}`);
    this.canvas.add(this.fabricElement);
  }
}

class Line extends FabricElement {
  name: String;
  fabricElement: fabric.Line;

  constructor(name: String, canvas: fabric.Canvas, coords: [number, number, number, number]) {
    super(canvas)
    this.name = name
    let isMobile = mobileCheck()
    this.fabricElement = new fabric.Line(coords, {
      fill: 'red',
      stroke: 'red',
      strokeWidth: isMobile ? 3 : 5,
      selectable: false,
      evented: false
    });
  }

  addToCanvas() {
    this.canvas.add(this.fabricElement);
  }
}

let width = 0
let height = 0
let nodes: Array<Node>
let lines: Array<Line>
let canvas

function init() {
  const canvasContainer = document.querySelector('.canvas-container')
  const canvasWidth = parseInt((canvasContainer as HTMLElement).style.width)
  const canvasHeight = parseInt((canvasContainer as HTMLElement).style.height)

  width = canvasWidth
  height = canvasHeight
  console.log("width ", width, "height ", height)
}

// node mouseover interaction 
function onNodeMouseOver(node: Node) {

  let isMobile = mobileCheck()
  const otherThanCurrentNode = nodes.filter((n: Node) => n.name != node.name)
  const otherThanConnectingNodes = otherThanCurrentNode.filter((n: Node) => !node.connectedNodes.some(cn => cn.name == n.name))
  otherThanConnectingNodes.forEach(n => {
    // set vs animate 
    // n.fabricElement.item(0).set('fill', '#D5D5D5') #f5ebe0
    n.fabricElement.item(0).animate('fontSize', isMobile ? 24/2 : 32/2, {
      onChange: canvas.renderAll.bind(canvas)
    })
    // n.fabricElement.item(0).animate('fontWeight', 'light', {
    //   onChange: canvas.renderAll.bind(canvas)
    // })
  })

  const otherThanConnectingLines = lines.filter((l: Line) => !node.lines.some(cl => cl.line.name == l.name))
  otherThanConnectingLines.forEach(l => {
    // l.fabricElement.set('stroke', '#FF7276')
    // l.fabricElement.set('strokeWidth', '1')
    l.fabricElement.animate('strokeWidth', '1', {
      onChange: canvas.renderAll.bind(canvas)
    })
  })

}

function onNodeMouseOut(node: Node) {

  let isMobile = mobileCheck()
  const otherThanCurrentNode = nodes.filter((n: Node) => n.name != node.name)
  const otherThanConnectingNodes = otherThanCurrentNode.filter((n: Node) => !node.connectedNodes.some(cn => cn.name == n.name))

  otherThanConnectingNodes.forEach(n => {
    // n.fabricElement.item(0).set('fill', 'black')
    n.fabricElement.item(0).animate('fontSize', isMobile ? 24 : 32, {
      onChange: canvas.renderAll.bind(canvas)
    })
    // n.fabricElement.item(0).animate('fontWeight', 'normal', {
    //   onChange: canvas.renderAll.bind(canvas)
    // })
  })

  const otherThanConnectingLines = lines.filter((l: Line) => !node.lines.some(cl => cl.line.name == l.name))
  otherThanConnectingLines.forEach(l => {
    // l.fabricElement.set('stroke', 'red')
    // l.fabricElement.set('strokeWidth', '3')
    l.fabricElement.animate('strokeWidth', isMobile ? 3 : 5, {
      onChange: canvas.renderAll.bind(canvas)
    })
  })

}


function drawFabricSketch() {
  canvas = new fabric.Canvas('myCanvas', { selection: false });
  fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

  function resizeCanvas() {
    let isMobile = mobileCheck()
    let widthOff = isMobile ? 0 : 400
    canvas.setDimensions({ width: window.innerWidth-widthOff, height: window.innerHeight });
  }

  window.onresize = () => {
    resizeCanvas();
  };
  resizeCanvas();

  init()
  const grid = new Grid(width, height, 2*10)
  const uniqueCircles = new Set(mindMapData.connections.flat());
  nodes = Array.from(uniqueCircles).map(circle => new Node(grid, canvas, circle));
  
  lines = mindMapData.connections.map(arr => {
    const [a, b] = arr;
  
    const nodeA = nodes.find(n => n.name === a);
    const nodeB = nodes.find(n => n.name === b);
  
    if (!nodeA || !nodeB) {
      throw new Error('Node not found');
    }
  
    const line = new Line(`${nodeA.name}-${nodeB.name}`, canvas, [nodeA.pos.x, nodeA.pos.y, nodeB.pos.x, nodeB.pos.y]);
  
    nodeA.connectToLine(line, true);
    nodeB.connectToLine(line, false);

    nodeA.connectToNode(nodeB)
    nodeB.connectToNode(nodeA)
  
    return line;
  });
  
  lines.forEach(l => l.addToCanvas());
  nodes.forEach(n => n.addToCanvas());
  
  // enable nodes and lines to move together 
  canvas.on('object:moving', function (e: fabric.IEvent<fabric.Object>) {
    const node = e.target as fabric.Text & { lines: Array<{ line: Line, top: boolean }> };
  
    node.lines.forEach(l => {
      if (l == null) return;
      if (l.top === true) {
        l.line.fabricElement && l.line.fabricElement.set({ x1: node.left!, y1: node.top! });
      }
      if (l.top === false) {
        l.line.fabricElement && l.line.fabricElement.set({ x2: node.left!, y2: node.top! });
      }
    });
  });
}

export { drawFabricSketch }