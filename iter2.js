var iterowalny = () => {
	var aktual = 1;
	return {
		next() {
			aktual *= 2;
			return {
				value: aktual,
				done: aktual > 30
			}
		}
	}
}();

console.log(iterowalny.next()); // Object {value: 2, done: false}
console.log(iterowalny.next()); // Object {value: 4, done: false}
console.log(iterowalny.next()); // Object {value: 8, done: false}
console.log(iterowalny.next()); // Object {value: 16, done: false}
console.log(iterowalny.next()); // Object {value: 32, done: true}
