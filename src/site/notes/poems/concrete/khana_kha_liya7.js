/**
@author opheliagame
@title  ね
@desc   #6 series khana kha liya?
*/

export const settings = {
  fontSize: '16px',
  // fontFamily: 'Courier New, monospace'
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

let density = 'ね';

import { sdCircle, sdSegment, opSmoothUnion } from '/src/modules/sdf.js'
import { sort } from '/src/modules/sort.js'
import { length, max, vec2, add, sub, mul, dot, mulN, addN, floor } from '/src/modules/vec2.js'
import { vec3 } from '/src/modules/vec3.js'
import { mix, map, clamp, smoothstep, smootherstep, fract } from '/src/modules/num.js';
import { CGA } from '/src/modules/color.js'

const { sin, cos, tan, PI, abs } = Math
function frame1(coord, context) {
  let cond = (coord.x == Math.abs(context.cols / 2)
    || coord.x == Math.abs(context.cols / 2) + 1
    || coord.x == Math.abs(context.cols / 2) + 2)
    && coord.y == Math.abs(context.rows / 2)

  let mod1 = coord.x - 1

  mod1 = mod1 % density.length
  return cond ? density[mod1] : ''
}

let indices = []
let currLength = 0

export function boot(context) {
	// currLength = context.cols*context.rows
  console.log(context.cols*context.rows)
	let maxLength = context.rows * context.cols
  indices.push(Math.floor(context.cols / 2) + Math.floor(context.rows / 2) * context.cols)
  for (let i = 1; i < maxLength; i++) {
	  // console.log("step", i)
    let prevIndex = indices[i - 1]
    let isFound = false
    let turns = 0
	while (isFound == false && turns < 20) {
      let side = Math.floor(Math.random() * 4)
      let newIndex = indices[0]
      if (side == 0) { // up
        newIndex = prevIndex - context.cols
      }
      else if (side == 1) { // right
        newIndex = prevIndex + 1
      }
      else if (side == 2) { // bottom
        newIndex = prevIndex + context.cols
      }
      else { // left
        newIndex = prevIndex - 1
      }

      if (!indices.includes(newIndex)) {
        isFound = true
        indices.push(newIndex)
		
      }
      else {
        turns += 1
      }
		
      // newIndex = newIndex
    }
  }
  console.log("length")
  console.log(indices.length)
}

export function pre(context) {
  const t = context.time * 0.0005
  const f = context.frame
  let timer = Math.floor(f / 20)

  let bf = 5
  let rem = f % (bf * 6)
  let beatNumber = Math.floor(rem / bf)

  
	// else {
  if(rem == bf || rem == 2*bf || rem == 5*bf) {
	  // currLength += 1
	  // indices.shift()
// 	  temp currlength set to max
	  currLength += 1
	  // density = '1'
  }
	else if(rem == 3*bf || rem == 4*bf) {
	  currLength += 2
	// density = '2'
  }
	// density = beatNumber
  
  // if (f % bf * 3 == 0 || f % bf * 4 == 0) {
  //   currLength += 2
  // }
  // else if(f % bf * 5 == 0) {
  //   indices.shift()
  // }

  // console.log(indices.length)
}


export function main(coord, context, cursor, buffer) {
  const t = context.time * 0.0005
  const f = context.frame
  const m = Math.min(context.cols, context.rows)
  const a = context.metrics.aspect

  let st = {
    x: 2.0 * (coord.x - context.cols / 2) / m * a,
    y: (coord.y / context.rows)
  }

  let rem = f % 120
  let beatNumber = Math.floor(rem / 20)


  let currIndex = coord.x + coord.y * context.cols
  let currIndices = indices.slice(0, currLength)
  let isFilled = currIndices.includes(currIndex)

  return {
    // char: arr[beatNumber % arr.length],
    char: isFilled ? 'x' : '',
    // char: isFilled ? density : '',
    // char: currLength

  }




}

