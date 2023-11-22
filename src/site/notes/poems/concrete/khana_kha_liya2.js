/**
@author opheliagame
@title  ghar pe kaun he?
@desc   #2 series khana kha liya?
*/


export const settings = {
  fontSize: '14px',
  // once: true,
  backgroundColor: 'white',
  color: 'black',
	// renderer: 'canvas'
}

export function random(x) {
  return fract(Math.sin(x) * 43758.5453);
}

function vrandom(st) {
	return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
}

function cubic(v) {
	return mul(mul(v, v), (addN(mulN(v, -2.0), 3.0)));
}

function gnoise(x) {
  let i = Math.floor(x);  // integer
  let f = fract(x);  // fraction
  return mix(random(i), random(i + 1.0), smoothstep(0., 1., f));
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


function fbm(st) {
    // Initial values
    let value = 0;
    let amplitud = .5;

    // Loop of octaves
    for (let i = 0; i < 4; i++) {
        value += amplitud * vsnoise(st);
        st = mulN(st, 2);
        amplitud *= 0.5;
    }
    return value;
}

const colors = ['#ebdebf', '#aaa08d', '#dcdca4', '#cdb4a5', '#a4a460']
const sky = '#b6d4d4'

const density1 = ['घ', 'र','पे','कौ','न','है', '?'];
const density2 = ['█', '▓', '▒', '░'];

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
    y: 2.0 * (coord.y - context.rows / 2) / m
  }

  let x = coord.x/context.rows

  let pt = {
    x: fract(st.x * 2.0) - 0.5,
    y: fract(st.y * 4.0) - 0.5
  }
  
  let rx = random(seed)
  let mt = map(st.y, -1, 1, 1, 0.5)*(sin(st.x+t)/2)  
  let lx = (gnoise(st.y*4.0+t)  - mt)/2
  let bx = map(st.y, -1, 1, -1.5, 1.2)
 
  if(st.y < 0.2) {
	  bx = 0
  }
  let l1 = sdSegment(st, vec2(-lx, st.y), vec2(-lx+bx, st.y), 0.01)
  let l2 = sdSegment(st, vec2(st.x, -rx), vec2(st.x, rx), 0.01)
  
  
  let dx = gnoise(st.y*20 + 10.0) < 0.5 ? 20 : 1
  let dy = gnoise(st.x*10 + 10.0) < 0.5 ? 1 : 20
  
  dx = 20
	dy = 1
  
  let mod1 = Math.floor(Math.abs(coord.y+coord.x+t*10))% density1.length
  
  let mod2 
  if(st.y > 0.2) {
	  mod2 = (coord.x / context.rows) * context.rows/20
  mod2 += (coord.y / context.cols) * context.cols/10
  mod2 += gnoise(random(st.x+st.y)) < 0.2
	  	? random(st.x*30.0)*2
        : random(st.y*20.0)*1
  // mod2 += gnoise(st.x+t*10)
  mod2 += (t)
  }
	else {
		mod2 = 0
		let vy = map(st.y, -1, 0, 1, 4)

	mod2 += (coord.x / context.rows) * context.rows/10
		mod2 += random(st.y*10.0)*vy*vy
		mod2 += random(st.x*3.0)*vy
	
		mod2 += t*2
		
	}
  

	
  let cmod1 = Math.floor(Math.abs((x*1.0) * 20.0)) % density1.length
  cmod1 =  Math.floor(mod2 % colors.length)
	
  mod2 = Math.floor(Math.abs(mod2) % density2.length)
	
  
  return {
    char: l1 < 0.0 ? density1[mod1] : density2[mod2],
    // char: density2[mod2],
	  // char: vgnoise(st),
    color: st.y < 0.2 
	  ? sky 
	  : l1 < 0.0 ?
	  colors[1] : colors[cmod1]
  }

}
