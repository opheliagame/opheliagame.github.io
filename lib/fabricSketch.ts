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
    ["sketching", "writing code"],
    ["sketching", "processing"],
    ["sketching", "text"],
    ["writing code", "shaders"],
    ["shaders", "live coding"],
    ["writing code", "design"]
  ]
};

class FabricElement {
  canvas: fabric.Canvas;

  constructor(canvas: fabric.Canvas) {
    this.canvas = canvas;
  }
}

class Node extends FabricElement {
  name: string;
  x: number;
  y: number;
  fabricElement: fabric.Text;
  lines: Array<{ line: Line, top: boolean }>;

  constructor(canvas: fabric.Canvas, name: string) {
    super(canvas)
    this.name = name;

    let isMobile = mobileCheck()
    // let width = window.innerWidth * (isMobile ? 1 : 2/3) * (isMobile ? 3 / 4 : 3/5) 
    let width = window.innerWidth * (isMobile ? 3 / 4 : 3/5) 
    let height = window.innerHeight * 3 / 4
    this.x = (Math.random() * 0.6 + 0.2) * (width);
    this.y = (Math.random() * 0.6 + 0.2) * (height);

    const circle = new fabric.Circle({
      radius: 30,
      // fill: '#eef',
      scaleY: 0.9,
      fill: '#fff',
      // opacity: 0.8,
      // stroke: '#000',
      strokeWeight: 2,
      originX: 'center',
      originY: 'center'
    });

    const text = new fabric.Text(name, {
      fontFamily: 'Akshar',
      fontSize: isMobile ? 18 : 32,
      fontWeight: 'normal',
      originX: 'center',
      originY: 'center'
    });

    this.fabricElement = new fabric.Group([ text ], {
      left: this.x,
      top: this.y,
      angle: Math.random() * Math.PI
    });

    this.fabricElement.hasControls = this.fabricElement.hasBorders = false;
    this.lines = [];
    (this.fabricElement as any).lines = [];
  }

  connectToLine(line: Line, top: boolean = true) {
    this.lines.push({ line, top });
    (this.fabricElement as any).lines.push({ line, top });
  }

  addToCanvas() {
    console.log(`adding node at x: ${this.x} y: ${this.y}`);
    this.canvas.add(this.fabricElement);
  }
}

class Line extends FabricElement {
  fabricElement: fabric.Line;

  constructor(canvas: fabric.Canvas, coords: [number, number, number, number]) {
    super(canvas)
    let isMobile = mobileCheck()
    this.fabricElement = new fabric.Line(coords, {
      fill: 'red',
      stroke: 'red',
      strokeWidth: isMobile ? 2 : 5,
      selectable: false,
      evented: false
    });
  }

  addToCanvas() {
    this.canvas.add(this.fabricElement);
  }
}

function drawFabricSketch() {
  var canvas = new fabric.Canvas('myCanvas', { selection: false });
  fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

  function resizeCanvas() {
    canvas.setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }

  window.onresize = () => {
    resizeCanvas();
  };
  resizeCanvas();

  const uniqueCircles = new Set(mindMapData.connections.flat());
  const nodes = Array.from(uniqueCircles).map(circle => new Node(canvas, circle));
  
  const lines = mindMapData.connections.map(arr => {
    const [a, b] = arr;
  
    const nodeA = nodes.find(n => n.name === a);
    const nodeB = nodes.find(n => n.name === b);
  
    if (!nodeA || !nodeB) {
      throw new Error('Node not found');
    }
  
    const line = new Line(canvas, [nodeA.x, nodeA.y, nodeB.x, nodeB.y]);
  
    nodeA.connectToLine(line, true);
    nodeB.connectToLine(line, false);
  
    return line;
  });
  
  lines.forEach(l => l.addToCanvas());
  nodes.forEach(n => n.addToCanvas());
  
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