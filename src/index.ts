/**
 * main
 */
import Stack from './stack/stack'
import StackUse from './stack/stack.use'

const stack = new Stack()

export default stack

// test
window['stack'] = stack

console.log(new StackUse().mulBase(26, 2))
console.log(new StackUse().isPalindrome('racecar'))
console.log(new StackUse().factorial(8))
