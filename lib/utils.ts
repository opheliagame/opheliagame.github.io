export function shuffleArray(array: any[]) {
  return array
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
}

export function randomColor(v) {
  let colors =  ['#DB2B39', '#00A878', '#F3A712', '#3066BE', '#79ADDC']
  return colors[Math.floor(random(v) * colors.length)]
}

export function random(v) {
  return fract(Math.sin(v*100000.0));
}

function fract(value) {
  return value - Math.floor(value);
}

