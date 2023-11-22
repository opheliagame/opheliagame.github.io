/**
@author opheliagame
@title  疲れた?
@desc   #5 series khana kha liya?
*/

export const settings = {
  fontSize: '16px',
	// fontFamily: 'mon'
}

function random(x) {
  return fract(Math.sin(x) * 43758.5453);
}

function vrandom(st) {
	return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
}


function gnoise(x) {
  let i = Math.floor(x);  // integer
  let f = fract(x);  // fraction
  return mix(random(i), random(i + 1.0), smoothstep(0., 1., f));
}
function cubic(v) {
	return mul(mul(v, v), (addN(mulN(v, -2.0), 3.0)));
}

function vgnoise(st) {
    let i = vec2(floor(st.x), floor(st.y));
    let f = vec2(fract(st.x), fract(st.y));
    let a = vrandom(i);
    let b = vrandom(add(i, vec2(1.0, 0.0)));
    let c = vrandom(add(i, vec2(0.0, 1.0)));
    let d = vrandom(add(i, vec2(1.0, 1.0)));
    let u = cubic(i);
	// console.log(f)
    return mix( a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
}

const colors = ['#000', '#222', '#666', '#ccc', '#fff']
let yellow = '#fffd74'

let density = 'つかれた';
// let density = '疲れた
// let density = 'tired'

import { sdCircle, sdSegment, opSmoothUnion } from '/src/modules/sdf.js'
import { sort } from '/src/modules/sort.js'
import { length, max, vec2, add, sub, mul, dot, mulN, addN, floor } from '/src/modules/vec2.js'
import { vec3 } from '/src/modules/vec3.js'
import { mix, map, clamp, smoothstep, smootherstep, fract } from '/src/modules/num.js';
import { CGA } from '/src/modules/color.js'

const { sin, cos, tan, PI, abs } = Math

const seed = Math.random() * 10

export function main(coord, context, cursor, buffer) {
  const t = context.time * 0.0005
  const m = Math.min(context.cols, context.rows)
  const a = context.metrics.aspect

  let st = {
    x: 2.0 * (coord.x - context.cols / 2) / m * a,
    y: (coord.y/context.rows) 
  }
  
  // st.x /= st.y*2-1.
  
//   let angle = -1.
  
//   st = {
// 	  x: Math.cos(angle) * st.x - Math.sin(angle) * st.y,
// 	  y: Math.sin(angle) * st.x + Math.cos(angle) * st.y,
//   }

  let x = Math.floor(st.x * 4)/4
  
 
  let ly = st.y < 0.7 ? 0.7 : st.y
  let ry = (st.y > 0.25 && st.y < 0.4) ? st.y : 0.25
  
  let l1 = sdSegment(st, vec2(-1.0, 1.0), vec2(1.0, 0.4), 0.01)
  let l2 = sdSegment(st, vec2(-1.0, 0.7), vec2(1.0, 0.2), 0.01)
  let l3 = sdSegment(st, vec2(-1.0, 0.9), vec2(1.0, 0.35), 0.06)
 
  
  let y = (random(st.x))
  y = gnoise(y+t)
  let l4 = sdSegment(st, vec2(st.x, y-0.1), vec2(st.x, y), 0.01)
 
  // let l1 = sdSegment(st, vec2(-1.0, 0.0), vec2(1.0, 0.0), 0.2)
  // let l2 = sdSegment(st, vec2(-1.0, 1.0), vec2(1.0, 1.0), 0.2)

	let lf = (l1 * l2 * l3)
	lf = l4
	
  
  let mod1 = Math.floor(Math.abs(coord.x + t)) % (density.length+1)
  let rr = random(st.x)
 
  
  return {
    char: density[0],
	 char:  lf < 0.0 ? 
	mod1 == density.length ?
	  rr < 0.5 ? '？' : '。' : density[mod1] : '',
	  // density[] : '',
	  // char: ry,
	  
	 // char: l1 < 0.0 ?
	 // density[mod1] : '',
	  // char: Math.floor(st.x*4)/4
	  // char: x,
  }

}

