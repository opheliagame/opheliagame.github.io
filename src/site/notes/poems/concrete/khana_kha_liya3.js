/**
@author opheliagame
@title  neend puri hui
@desc   #3 series khana kha liya?
*/


export const settings = {
  fontSize: '16px',
  // once: true,
	// lineHeight    : '24px',
	backgroundColor: 'black'
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

// yellow = 'red'
// const density1 = ['नीं', 'द', 'पू', 'री', 'हु', 'ई', '?'];
// const density1 = 'didyousleepwell'.toUpperCase()
const density1 = 'didyousleepwell'
const density2 = ['|', '/'];
const density3 = ['|', '\\'];
// density2 = density2;

import { sdCircle, sdSegment, opSmoothUnion } from '/src/modules/sdf.js'
import { sort } from '/src/modules/sort.js'
import { length, max, vec2, add, sub, mul, dot, mulN, addN } from '/src/modules/vec2.js'
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
    y: (coord.y/context.rows) 
  }

  let x = coord.x/context.rows

  let pt = {
    x: fract(st.x * 2.0) - 0.5,
    y: fract(st.y * 4.0) - 0.5
  }
  
  let dim = 4
  let my = (abs(st.y*dim))
  let rx = gnoise(st.x*4.) < 0.5 ? 0.2*st.x : (-0.2)*st.x
  let sign = gnoise(st.x*4.) < 0.5
  
  let mod1 = Math.abs(coord.x+t)
  // mod1 = Math.floor((abs(st.y+rx)*abs(coord.y+coord.x+t))) % density1.length

  
	let w1 = floor((st.y+rx)*20.0) 
	w1 = floor(st.y+st.x*10.0)
	w1 = vgnoise(addN(st, gnoise(t*3.0)))
	// w1 = floor((st.y+rx)*50.0)
	// w1 = random(st.x+t)
	

	let mod2 = ((st.y+rx)) * 255
	let d1 = sign == true ? density3 : density2
	mod2 = Math.floor(abs(st.y+rx)*10.0) % d1.length
	// mod2 = sign == true ? 0 : 1

	let st1 =　vec2(st.x, st.y+rx)
	st1 = {
    x: fract(st1.x * 5.0) - 0.5,
    y: fract(st1.y * 5.0) - 0.25
  }
	
	w1 = vgnoise(addN(st1, gnoise(t*3.0)))
	
	mod1 = Math.floor((w1) < 0.5 ? mod1 : mod1) % density1.length
	
	
	let s1 = sdSegment(st1, vec2(-0.2, 0), vec2(0.2, 0), 0.05)
	let s2 = sdSegment(vec2(st1.x, st1.y+0.25), vec2(st1.x, -0), vec2(st1.x, 0.01), 0.05)
 
	s1 = s1 < 0.0 ? -s1*vgnoise(addN(mulN(st1, 10.0), t)) : 0.0
  
  return {
    char: s1 < 0.0 ? density1[mod1] : d1[mod2],
    char: s1 < 0.0 ? density2[1] : s2 < 0.0 ? density1[mod1] : d1[mod2],
    // char: random(st.y+rx) < 0.1 ? density1[mod2] : density2[0],
	  // char: w1,
	  
	  
    color: s1 < 0.0 ? yellow : 'white',
    // color: random(st.y+rx) < 0.1 ? 'black' : colors[mod2],
	  backgroundColor: mod2 != 0.0 ? colors[1] : s1 < 0.0 ? colors[1] : 'black',
	  // backgroundColor: colors[0],
  }

}
