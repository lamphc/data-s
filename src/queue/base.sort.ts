/**
 * 基数排序
 * 对于 0~99 的数字，基数排序将数据集扫描两次。
 * 第一次按个位上的数字进行排序，第二 次按十位上的数字进行排序。
 * 每个数字根据对应位上的数值被分在不同的盒子里
 */
import Queue from './queue'

export default class BaseSort {
	distribute(nums, queues, n, digit) {
		for (var i = 0; i < n; ++i) {
			if (digit == 1) {
				queues[nums[i] % 10].enqueue(nums[i])
			} else {
				queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
			}
		}
	}

	collect(queues, nums) {
		var i = 0
		for (var digit = 0; digit < 10; ++digit) {
			while (!queues[digit].empty()) {
				nums[i++] = queues[digit].dequeue()
			}
		}
	}

	dispArray(arr) {
		let retStr: string = ''
		for (var i = 0; i < arr.length; ++i) {
			retStr += arr[i] + ' '
		}
		console.log(retStr)
	}

	run() {
		var queues = []
		for (var i = 0; i < 10; ++i) {
			queues[i] = new Queue()
		}
		var nums = []
		for (var i = 0; i < 10; ++i) {
			nums[i] = Math.floor(Math.floor(Math.random() * 101))
		}
		console.log('Before radix sort: ')
		this.dispArray(nums)
		this.distribute(nums, queues, 10, 1)
		this.collect(queues, nums)
		this.distribute(nums, queues, 10, 10)
		this.collect(queues, nums)
		console.log('\n\nAfter radix sort: ')
		this.dispArray(nums)
	}
}
