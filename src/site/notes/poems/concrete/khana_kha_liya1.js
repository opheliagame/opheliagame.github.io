/**
@author opheliagame
@title  khana kha liya?
@desc   series 1 
*/

export const settings = {
  fontSize: '8px',
  // once: true,
  backgroundColor: 'white',
  color: 'black',
	// renderer: 'canvas'
}

export function random(x) {
  return fract(Math.sin(x) * 43758.5453);
}

function gnoise(x) {
  let i = Math.floor(x);  // integer
  let f = fract(x);  // fraction
  return mix(random(i), random(i + 1.0), smoothstep(0., 1., f));
}

const colors = ['#fcbc93', '#5b5d6c', '#a28179', '#445464', '#140c14']

const density = ['█', '▓', '▒', '░', 'खा', 'ना', 'खा', 'लि', 'या', '?'];
// const density = ['प', 'ने', ' ', 'न', 'म', ' ', 'कु', 'छ']

import { sdCircle, sdSegment, opSmoothUnion } from '/src/modules/sdf.js'
import { sort } from '/src/modules/sort.js'
import { length, max, vec2, add, sub, mulN } from '/src/modules/vec2.js'
import { vec3 } from '/src/modules/vec3.js'
import { mix, map, smoothstep, smootherstep, fract } from '/src/modules/num.js';

import { CGA } from '/src/modules/color.js'

const { floor, sin, cos, tan, PI, abs } = Math

const seed = Math.random() * 10

export function main(coord, context, cursor, buffer) {
  const t = context.time * 0.0005
  const m = Math.min(context.cols, context.rows)
  const a = context.metrics.aspect

  let st = {
    x: 2.0 * (coord.x - context.cols / 2) / m * a,
    y: 2.0 * (coord.y - context.rows / 2) / m
  }


  let pt = {
    x: fract(st.x * 2.0) - 0.5,
    y: fract(st.y * 4.0) - 0.5
  }
  
  let x = coord.x/context.rows

  let dim = 8.0
  let fy = Math.floor((st.y * dim))
  let fx = Math.floor(st.x * dim)
  let rn = gnoise(fx * random(seed) * 100. + t)
  // rn = sin(st.x)
  // let rn2 = gnoise(fy*10.0)

  // let x = st.y > 0.0 ? st.x + rn2 : st.x

  let offy = 0.3
  // let sdf1 = sdSegment(st, vec2(fx, st.y), vec2(sin(rn+t), st.y), 0.01)
  let sdf1 = sdSegment(st, vec2(st.x, -rn + offy), vec2(st.x, rn + offy), 0.01)
  // let sdf1 = sdSegment(st, vec3(st.x, -rn, 0.0), vec3(rn, st.y, 0.0), 0.01)
  let sign = Math.random() * 2 < 1 ? -1 : 1

  // let sign = Math.floor(st.y * 20.0) % 2 == 0 ? 1 : -1
  let mod1 = (coord.x / context.rows) * context.rows
  mod1 += st.y > offy ? gnoise(st.y * 10) + t * 10 * sign : 0.0
  mod1 = Math.floor(mod1)

  let mod2 = Math.floor(sin(gnoise(fx*10+t*0.1+fy*2))*20.0) % colors.length
  
  return {
    char: sdf1 < 0.0 ? density[mod1 % density.length] : '░',
    color: colors[mod2]
  }

}
