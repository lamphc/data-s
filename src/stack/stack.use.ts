/**
 * 栈应用
 */
import Stack from './stack'

export default class StackUse {
	/**
	 * 数字进制转换
	 * 二八十六
	 *  (1) 最高位为 n % b，将此位压入栈。
	 *  (2) 使用 n/b 代替 n。
	 *  (3) 重复步骤 1 和 2，直到 n 等于 0，且没有余数。
	 *  (4) 持续将栈内元素弹出，直到栈为空，依次将这些元素排列，就得到转换后数字的字符 串形式。
	 * @param num
	 * @param base 进制
	 */
	mulBase(num: number, base: number) {
		let s: Stack = new Stack()
		do {
			s.push(num % base)
			num = Math.floor((num /= base))
		} while (num > 0)
		let converted: string = ''
		while (s.length() > 0) {
			converted += s.pop()
		}
		return converted
	}

	/**
	 * 回文是指这样一种现象：一个单词、短语或数字，从前往后写和从后往前写都是一样的
	 * 判断文本是否是回文
	 * @param word
	 */
	isPalindrome(word: string): boolean {
		const s: Stack = new Stack()
		for (let i = 0; i < word.length; i++) {
			const ele: string = word[i]
			s.push(ele)
		}
		let rword: string = ''
		while (s.length() > 0) {
			rword += s.pop()
		}
		if (rword === word) return true
		else return false
	}

	/**
	 * 阶乘
	 * @param num
	 */
	factorial(num: number): number {
		const s: Stack = new Stack()
		while (num > 1) {
			s.push(num--)
		}
		let st: number = 1
		while (s.length() > 0) {
			st *= s.pop()
		}
		return st
	}

	/**
	 * 判断一个算术表达式中的括号是否匹配
	 * @param exp
	 */
	isExpMath(exp: string): boolean {
		let s: Stack = new Stack(),
			l: Array<string> = ['(', '{', '['],
			r: Array<string> = [')', '}', ']']
		for (let i: number = 0; i < exp.length; i++) {
			const st: string = exp[i]
			if (l.includes(st)) {
				s.push(st)
			} else if (r.includes(st)) {
				let top = s.pop()
				if ((top == '(' && st == ')') || (top == '[' && st == ']') || (top == '{' && st == '}')) {
					continue
				} else {
					return false
				}
			}
		}
		if (s.length() > 0) {
			return false
		}
		return true
	}

	getLikeCandy(nl: string, cd: Stack): Stack {
		const l: Stack = new Stack()
		while (cd.length() > 0) {
			let t = cd.pop()
			if (t !== nl) l.push(t)
		}
		while (l.length() > 0) {
			cd.push(l.pop())
		}
		return cd
	}

	static setCandy(): Stack {
		const candy: Stack = new Stack()
		candy.push('red')
		candy.push('yellow')
		candy.push('orange')
		candy.push('yellow')
		candy.push('blue')
		candy.push('white')
		candy.push('yellow')
		candy.push('white')
		candy.push('yellow')
		candy.push('purple')
		candy.push('pink')
		return candy
	}
}
const candy = StackUse.setCandy()
export { candy }
