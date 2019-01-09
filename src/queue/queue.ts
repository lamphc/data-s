/**
 * 队列是一种先进先出（First-In-First-Out，FIFO）的数据结构
 */
export default class Queue {
	dataStore: Array<any> = []

	/**
	 *排队-方法向队尾添加一个元素
	 */
	enqueue(el: any) {
		this.dataStore.push(el)
	}
	/**
	 * 出队-方法删除队首的元素
	 */
	dequeue(): any {
		return this.dataStore.shift()
	}
	/**
	 * 读取队首和队尾的元素
	 */
	front(): any {
		return this.dataStore[0]
	}
	back(): any {
		return this.dataStore[this.dataStore.length - 1]
	}
	/**
	 * 显示队列内的所有元素
	 */
	toString(): string {
		let retStr = ''
		for (let i = 0; i < this.dataStore.length; ++i) {
			retStr += `${i}:${this.dataStore[i]}\n`
		}
		return retStr
	}
	/**
	 * 需要一个方法判断队列是否为空
	 */
	isEmpty(): boolean {
		if (this.dataStore.length === 0) return true
		return false
	}
}
