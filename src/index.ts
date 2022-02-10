type Option =
  | 'bgBlack'
  | 'bgRed'
  | 'bgGreen'
  | 'bgYellow'
  | 'bgBlue'
  | 'bgMagenta'
  | 'bgCyan'
  | 'bgWhite'
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'reset'
  | 'bright'
  | 'dim'
  | 'underscore'
  | 'blink'
  | 'reverse'
  | 'hidden'

const OPTIONS = {
  // FONT COLORS
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  // BACKGROUND COLORS
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
  // STYLES
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
} as const

/**
 * #### **Prettier log description** 💄
 * Allows you to change the style of text shown in console logs (NodeJS)
 *
 * #### Params and return
 * @param input A string or number you want to style
 * @param options An array with any of the options available (in string): 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'reset', 'bright', 'dim', 'underscore', 'blink', 'reverse', 'hidden'
 * @returns A styled string ready to console log.
 *
 * #### Usage
 *
 * ```js
 * import { pl } from 'prettier-log'
 *
 * pl('red text', ['red'])
 *
 * pl('red text with blue background', ['red', 'bgBlue'])
 *
 * pl('yellow text with green background underlined', ['yellow', 'bgGreen', 'underscore'])
 * ```
 *
 * See [readme](https://github.com/roavellarm/prettier-log/blob/main/README.md) for more information.
 *
 * @since v1.0.0
 */
const pl = (input: string | number, options: Array<Option>): string => {
  if (!options.length) return String(input)

  let aux = input
  options.forEach((c) => (aux = OPTIONS[c] + aux + OPTIONS['reset']))

  return String(aux)
}

export { pl }
