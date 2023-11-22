/**
@author opheliagame
@title  疲れた?2
@desc   #5 series khana kha liya?
*/

export const settings = {
	fontSize: '16px',
	// fontFamily: 'monospace'
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
	return mix(a, b, u.x) +
		(c - a) * u.y * (1.0 - u.x) +
		(d - b) * u.x * u.y;
}

const colors = ['#000', '#222', '#666', '#ccc', '#fff']
let yellow = '#fffd74'

let density = 'つかれた？';
// let density = '疲れた
let density2 = 'つかれた。'

import { sdCircle, sdSegment, opSmoothUnion } from '/src/modules/sdf.js'
import { sort } from '/src/modules/sort.js'
import { length, max, vec2, add, sub, mul, dot, mulN, addN, floor } from '/src/modules/vec2.js'
import { vec3 } from '/src/modules/vec3.js'
import { mix, map, clamp, smoothstep, smootherstep, fract } from '/src/modules/num.js';
import { CGA } from '/src/modules/color.js'

const { sin, cos, tan, PI, abs } = Math

const seed = Math.random() * 10

export function main(coord, context, cursor, buffer) {
	const t = context.time * 0.009
	const m = Math.min(context.cols, context.rows)
	const a = context.metrics.aspect

	let st = {
		x: 2.0 * (coord.x - context.cols / 2) / m * a,
		y: (coord.y / context.rows) 
	}

	
	let x = coord.x%density2.length
	let mx = Math.floor(coord.x+t)%density.length
		
	let y1 = st.y != 0.5 ? st.y : 0.0
	let rx = random(y1*4+st.x*4)+gnoise(y1*10.+t/10.00)*0.1
	
	let ny = Math.abs(st.y*2.0-1.0)
	let sx = -ny*ny*2 + 0.057 
	sx = (st.x < -0.2) ? sx - rx : sx
	
	let l1 = sdSegment(st, vec2(-0.04, 0.5), vec2(0.04, 0.5), 0.01)
	let l2 = sdSegment(st, vec2(sx, st.y), vec2(1.0, st.y), 0.01)

	return {
		char: (l2) < 0.0 
		? density[mx] 
		: l1 < 0.0 ? density2[x] : ''
		// : ''
	
	}

}

