import { sc } from '../src/index'

const example1 = sc('red text', ['red'])
const example2 = sc('red text with blue background', ['red', 'bgBlue'])
const example3 = sc('yellow text with green background underlined', [
  'yellow',
  'bgGreen',
  'underscore',
])

console.log(example1)
console.log(example2)
console.log(example3)
