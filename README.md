# PRETTIER LOG

A user-friendly utility to help style javascript console logs by allowing you to change the style of text displayed on terminal/console.

### **How it works**

- `@param1 input`: A string or number you want to style

- `@param2 options`: An array with any of the options available (in string):

  > **The background options are:**  
  > _'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite'_
  >
  > **The text color options are:**  
  > _'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'_
  >
  > **Other styles options are:**  
  > _'reset', 'bright', 'dim', 'underscore', 'blink', 'reverse', 'hidden'_

- `@return` A styled string ready to console log.

### **Usage example**

```js
import { pl } from 'prettier-log'

pl('red text', ['red'])

pl('red text with blue background', ['red', 'bgBlue'])

pl('yellow text with green background underlined', ['yellow', 'bgGreen', 'underscore'])
```
