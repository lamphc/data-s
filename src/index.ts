/**
 * main
 */
import Stack from './stack/stack'
import StackUse, { candy } from './stack/stack.use'
import Queue from './queue/queue'

const stack = new Stack(),
	queue = new Queue()

export default stack

// test
window['stack'] = stack
console.log(new StackUse().mulBase(26, 2))
console.log(new StackUse().isPalindrome('racecar'))
console.log(new StackUse().factorial(8))
console.log(new StackUse().isExpMath('2.3 + 23 / 12 + 3.14159×0.24)'))
console.log(new StackUse().getLikeCandy('yellow', candy))

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue(), queue)
