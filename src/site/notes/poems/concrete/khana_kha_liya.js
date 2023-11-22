/**
@author opheliagame
@title  khana kha liya?
@desc   series 1 
*/

export const settings = {
	fontSize: '12px',
  // once: true,
}

export function random(x) {
  return fract(Math.sin(x) * 43758.5453);
}

function gnoise(x) {
  let i = Math.floor(x);  // integer
  let f = fract(x);  // fraction
  return mix(random(i), random(i + 1.0), smoothstep(0.,1.,f)); 
}

// const density = '9876543210?!abc;:+=-,._ '
// const density = '/\;:+=-,._ '
// const density = 'have you eaten'
// const density = [' ', 'कु', 'छ']
const density = ['खा','ना','खा','लि','या', '?'];
// const density = ['प', 'ने', ' ', 'न', 'म', ' ', 'कु', 'छ']

import { sdCircle, sdSegment, opSmoothUnion } from '/src/modules/sdf.js'
import { sort } from '/src/modules/sort.js'
import { length, max, vec2, add, sub, mulN } from '/src/modules/vec2.js'
import { vec3 } from '/src/modules/vec3.js'
import { mix, map, smoothstep, smootherstep, fract } from '/src/modules/num.js';

import { CGA } from '/src/modules/color.js' 

const { floor, sin, cos, tan, PI, abs } = Math


export function main(coord, context, cursor, buffer) {
	const t  = context.time * 0.0001
    const m = Math.min(context.cols, context.rows)
    const a = context.metrics.aspect

	let st = {
		x : 2.0 * (coord.x - context.cols / 2) / m * a,
		y : 2.0 * (coord.y - context.rows / 2) / m
	}
	
	
	let pt = {
		x : fract(st.x * 2.0) - 0.5,
		y : fract(st.y * 4.0) - 0.5
	}

  let dim = 4.0
  let fy = Math.floor((st.y*dim))
  let fx = Math.floor(st.x*dim)
  let rn = gnoise(fy+t)
  // let rn = gnoise(st.x+t)
  
  // let sdf1 = sdSegment(st, vec2(-rn, fract(st.y*4.0)*fy), vec2(rn, fract(st.y*4.0)*fy), 0.6)
  let sdf1 = sdSegment(st, vec3(st.x, -rn, 0.0), vec3(rn, st.y, 0.0), 0.01)

  let sign = Math.floor(st.y * 20.0) % 2 == 0 ? 1 : -1
  let mod1 = Math.floor(Math.abs((coord.x/context.rows)*context.rows)) % density.length

  return sdf1 < 0.0 ? density[mod1] : ''
  // return fract(st.y*4.0)*fy < 1.0 ? ':' : ''
  return rn
}
