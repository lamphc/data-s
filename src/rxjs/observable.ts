import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs'
import { map, filter, switchMap } from 'rxjs/operators'

export default class Obst {
	constructor() {
		this.run()
	}

	run() {
		const observable = Observable.create(observer => {
			console.log('start:')
			observer.next(1)
			observer.next(2)
			observer.next(3)
			setTimeout(() => {
				observer.next(4)
				observer.complete()
			}, 1000)
			setTimeout(() => {
				observer.next(40)
			}, 2000)
		})

		observable.subscribe(v => {
			console.log('sub-rx:', v)
		})

		observable.subscribe(v => {
			console.log('sub-rx2:', v)
		})
	}
}
