/**
 * main
 */
import Stack from "./stack/stack"
import MulBase from "./stack/mulBase"

const stack = new Stack()

export default stack

// test 
window['stack'] = stack

console.log(new MulBase().mulBase(32,2))