const mindMapData = {
  // nodes: ["sketching", "lines", "movement", "color", "processing", "live coding", "p5js", "text", "typography", "design", "connecting things"],
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

}

var canvas = this.__canvas = new fabric.Canvas('myCanvas', { selection: false });
fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
function resizeCanvas() {
  canvas.setDimensions({width: window.innerWidth, height: window.innerHeight})

}
window.onresize = ((e) => {
  resizeCanvas()
})
resizeCanvas()

class Node {
  constructor(name) {
    this.name = name
    this.x = (Math.random()*0.8 + 0.1) * (window.innerWidth)
    this.y = (Math.random()*0.8 + 0.1) * (window.innerHeight)
    // this.fabricElement =  new fabric.Circle({
    //   left: this.x,
    //   top: this.y,
    //   strokeWidth: 5,
    //   radius: 12,
    //   fill: '#fff',
    //   stroke: '#666'
    // });

    this.fabricElement =  new fabric.Text(
      name, 
      {
        left: this.x,
        top: this.y,
        fontFamily: 'Akshar',
        // fill: '#000',
        // stroke: '#000'
      }
    );

    this.fabricElement.hasControls = this.fabricElement.hasBorders = false;
    this.lines = []
    this.fabricElement.lines = []
  
  }

  connectToLine(line, top=true) {
    this.lines.push({line: line, top: top})
    this.fabricElement.lines.push({line: line, top: top})
  }

  addToCanvas() {
    console.log(`adding node at x: ${this.x} y: ${this.y}`)
    canvas.add(this.fabricElement)
  }
}

class Line {
  constructor(coords) {
    this.fabricElement = new fabric.Line(coords, {
      fill: 'red',
      stroke: 'red',
      strokeWidth: 5,
      selectable: false,
      evented: false,
    });
  }

  addToCanvas() {
    canvas.add(this.fabricElement)
  }
}


// make circles
const uniqueCircles = new Set(mindMapData.connections.flat(1))
const nodes = [...uniqueCircles].map(circle => new Node(circle))

// make lines
const lines = mindMapData.connections.map((arr) => {
  const a = arr[0]
  const b = arr[1]

  // make line between a and b
  const nodeA = nodes.find(n => n.name == a)
  const nodeB = nodes.find(n => n.name == b)

  const line = new Line([nodeA.x, nodeA.y, nodeB.x, nodeB.y])

  // connect line to the two nodes
  nodeA.connectToLine(line, true)
  nodeB.connectToLine(line, false)

  return line
})

// first add lines then circles
lines.forEach(l => l.addToCanvas())
nodes.forEach(n => n.addToCanvas())


canvas.on('object:moving', function(e) {
  var node = e.target;

  node.lines.forEach(l => {
    if(l == null) return
    if(l.top == true) {
      l.line.fabricElement && l.line.fabricElement.set({x1: node.left, y1: node.top})
    }
    if(l.top == false) {
      l.line.fabricElement && l.line.fabricElement.set({x2: node.left, y2: node.top})
    }
  })

  canvas.renderAll()
});

