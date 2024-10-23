import { palette } from "./design";
import { getStops } from "./points";

// a value between 0 and 1
function pattern1(v, res = 0.1) {
  return Math.abs(Math.sin(v * res));
}

function getColor(v) {
  return palette[Math.floor(v * palette.length)];
}

class Grid {
  width: number
  height: number 
  xdiv: number
  ydiv: number 
  sx: number
  sy: number
  

  constructor(width, height, xn, yn) {
    this.width = width
    this.height = height
    this.xdiv = xn
    this.ydiv = yn

    this.sx = this.width / this.xdiv;
    this.sy = this.height / this.ydiv
  }

  draw(can) {

    
    let g = can

    // sorted and unsorted arrays look very different!
    let xstops = [0, ...getStops(this.xdiv), 1].sort();
    let yoff = 0;
    let xoff = 0;
    // let xws = getStops(xn + 1);
    for (let i = 0; i < this.xdiv + 1; i++) {
      let ystops = [0, ...getStops(this.ydiv), 1].sort();
      // let prevXws = [xws[0]];
      for (let j = 0; j < this.ydiv + 1; j++) {
        // let xws = getStops(xn + 1);
        let x = xstops[i] * this.width;
        // x = prevXws[j]
        let y = ystops[j] * this.height;
        let sx = ((i + 1 == this.xdiv ? this.width : xstops[i + 1]) - xstops[i]) * this.width;
        // let sw = xws[i] * sx;
        let sy = ((j + 1 == this.ydiv ? this.height : ystops[j + 1]) - ystops[j]) * this.height;
        let p1 = pattern1(Math.abs(Math.sin(i * 10)) * 20 + Math.abs(Math.sin(j * 10)) * 20);
        let col = getColor(p1);
  
        g.push();
        g.translate(x, y);
        // g.fill('red')
        // g.circle(0, 0, 20)
        g.strokeWeight(2);
        // g.noFill();
        // g.noStroke();
        g.stroke('white')

        // stroke('whitesmoke')
        // g.texture(g1)
        // if(random() < 0.5) {
          g.fill(col);
        // }
        // g.circle(0, 0, 10)
        // g.rotate(radians(random(-3, 3)));
        g.rectMode(g.CENTER);
        g.rect(sx / 2, sy / 2, sx + 0, sy + 0);
        g.pop();
  
        // prevXws.push(sw);
      }
      // xstops = sort([0, ...getStops(xn), 1]);
    }

  }


}

export {
  Grid,
  pattern1,
  getColor,
}