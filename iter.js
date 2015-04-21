var tablica = [1, 2, 3, 4];
var iterator = tablica[Symbol.iterator]();

console.log(iterator.next()); // Object {value: 1, done: false}
console.log(iterator.next()); // Object {value: 2, done: false}
console.log(iterator.next()); // Object {value: 3, done: false}
console.log(iterator.next()); // Object {value: 4, done: true}
console.log(iterator.next()); // Object {value: 4, done: true}

