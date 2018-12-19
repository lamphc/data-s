/**
 * stack
 * LIFO(last in first out)数据结构
 */
export default class Stack {
	protected dataSore: Array<any> = [] // 栈内元素
	protected top: number = 0 // 栈顶元素位置

	/**
	 * 向栈内压入元素
	 * @param ele
	 */
	push(ele: any) {
		this.dataSore[this.top++] = ele
	}

	/**
	 * 推出栈顶元素
	 */
	pop() {
		--this.top
		return this.dataSore.pop()
	}

	/**
	 * 获取栈顶元素
	 */
	peek() {
		return this.dataSore[this.top - 1]
	}

	/**
	 * 获取栈内存储元素个数
	 */
	length() {
		return this.top
	}

	/**
	 * 清空栈
	 */
	clear() {
		this.dataSore.length = this.top = 0
	}

	/**
	 * 获取栈中所有元素
	 */
	all() {
		return this.dataSore
	}
}
