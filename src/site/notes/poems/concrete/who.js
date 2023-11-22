/**
@author opheliagame
@title  who / how
@desc   
*/

import { sdSegment } from '/src/modules/sdf.js'
import { vec2 } from '/src/modules/vec2.js'

let word1 = 'who'

function frame1(coord, context) {
	let cond = (coord.x == Math.abs(context.cols/2) 
			|| coord.x == Math.abs(context.cols/2)+1
			|| coord.x == Math.abs(context.cols/2)+2)
			&& coord.y == Math.abs(context.rows/2)
	
	let mod1 = coord.x-1
	
	mod1 = mod1 % word1.length
	
	
	return cond ? word1[mod1] : ''
		

}

function frame2(coord, context) {
	let cond = (coord.x == Math.abs(context.cols/2) 
			|| coord.x == Math.abs(context.cols/2)+1
			|| coord.x == Math.abs(context.cols/2)+2)
			&& (coord.y == Math.abs(context.rows/2)
			|| coord.y == Math.abs(context.rows/2)-1)
	
	let mod1 = coord.x-1
	
	mod1 = mod1 % word1.length
	let word
	if(coord.y == Math.abs(context.rows/2)-1) {
		word = 'w  '
	}
	else if(coord.y == Math.abs(context.rows/2)) {
		word = ' ho'
	}
	
	return cond ? word[mod1] : ''
		

}

function frame3(coord, context) {
	let cond = (coord.x == Math.abs(context.cols/2) 
			|| coord.x == Math.abs(context.cols/2)+1
			|| coord.x == Math.abs(context.cols/2)+2)
			&& (coord.y == Math.abs(context.rows/2)
			|| coord.y == Math.abs(context.rows/2)-1)
	
	let mod1 = coord.x-1
	
	mod1 = mod1 % word1.length
	let word
	if(coord.y == Math.abs(context.rows/2)-1) {
		word = ' w '
	}
	else if(coord.y == Math.abs(context.rows/2)) {
		word = 'ho '
	}
	
	return cond ? word[mod1] : ''
		

}

function frame4(coord, context) {
	let cond = (coord.x == Math.abs(context.cols/2) 
			|| coord.x == Math.abs(context.cols/2)+1
			|| coord.x == Math.abs(context.cols/2)+2)
			&& (coord.y == Math.abs(context.rows/2)
			|| coord.y == Math.abs(context.rows/2)-1)
	
	let mod1 = coord.x-1
	
	mod1 = mod1 % word1.length
	let word
	if(coord.y == Math.abs(context.rows/2)-1) {
		word = '  w'
	}
	else if(coord.y == Math.abs(context.rows/2)) {
		word = 'ho '
	}
	
	return cond ? word[mod1] : ''
		

}


function frame5(coord, context) {
	let cond = (coord.x == Math.abs(context.cols/2) 
			|| coord.x == Math.abs(context.cols/2)+1
			|| coord.x == Math.abs(context.cols/2)+2)
			&& coord.y == Math.abs(context.rows/2)
	
	let mod1 = coord.x-1
	
	mod1 = mod1 % word1.length
	
	let word = 'how'
	
	return cond ? word[mod1] : ''
		

}

function frame6(coord, context) {
	let cond = (coord.x == Math.abs(context.cols/2) 
			|| coord.x == Math.abs(context.cols/2)+1
			|| coord.x == Math.abs(context.cols/2)+2)
			&& (coord.y == Math.abs(context.rows/2)
			|| coord.y == Math.abs(context.rows/2)-1)
	
	let mod1 = coord.x-1
	
	mod1 = mod1 % word1.length
	let word
	if(coord.y == Math.abs(context.rows/2)-1) {
		word = 'ho '
	}
	else if(coord.y == Math.abs(context.rows/2)) {
		word = '  w'
	}
	
	return cond ? word[mod1] : ''
		

}

function frame7(coord, context) {
	let cond = (coord.x == Math.abs(context.cols/2) 
			|| coord.x == Math.abs(context.cols/2)+1
			|| coord.x == Math.abs(context.cols/2)+2)
			&& (coord.y == Math.abs(context.rows/2)
			|| coord.y == Math.abs(context.rows/2)-1)
	
	let mod1 = coord.x-1
	
	mod1 = mod1 % word1.length
	let word
	if(coord.y == Math.abs(context.rows/2)-1) {
		word = ' ho'
	}
	else if(coord.y == Math.abs(context.rows/2)) {
		word = ' w '
	}
	
	return cond ? word[mod1] : ''
		

}

function frame8(coord, context) {
	let cond = (coord.x == Math.abs(context.cols/2) 
			|| coord.x == Math.abs(context.cols/2)+1
			|| coord.x == Math.abs(context.cols/2)+2)
			&& (coord.y == Math.abs(context.rows/2)
			|| coord.y == Math.abs(context.rows/2)-1)
	
	let mod1 = coord.x-1
	
	mod1 = mod1 % word1.length
	let word
	if(coord.y == Math.abs(context.rows/2)-1) {
		word = ' ho'
	}
	else if(coord.y == Math.abs(context.rows/2)) {
		word = 'w  '
	}
	
	return cond ? word[mod1] : ''
		

}

export function main(coord, context, cursor, buffer) {
	const t = context.time * 0.01
	const f = context.frame 
    const m = Math.min(context.cols, context.rows)
    const a = context.metrics.aspect

	let st = {
		x : 2.0 * (coord.x - context.cols / 2) / m * a,
		y : 2.0 * (coord.y - context.rows / 2) / m
	}
	
	let f1 = frame1(coord, context)
	let f2 = frame2(coord, context)
	let f3 = frame3(coord, context)
	let f4 = frame4(coord, context)
	let f5 = frame5(coord, context)
	let f6 = frame6(coord, context)
	let f7 = frame7(coord, context)
	let f8 = frame8(coord, context)
	
	let arr = [f1, f2, f3, f4, f5, f6, f7, f8]
	let timer = Math.floor(f/20)
	
	return {
		char: arr[timer % arr.length],
		// char: f1,
		// char: f2,
		
	}
	
}
