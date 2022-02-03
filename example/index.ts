import { pl } from '../src/index'

const example1 = pl('red text', ['red'])
const example2 = pl('red text with blue background', ['red', 'bgBlue'])
const example3 = pl('yellow text with green background underlined', [
  'yellow',
  'bgGreen',
  'underscore',
])

console.log(example1)
console.log(example2)
console.log(example3)
