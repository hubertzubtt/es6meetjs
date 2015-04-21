var funkcja = function(x, y = 5, z = 7) {
	return `parametry: ${x}, ${y}, ${z}`;
}

console.log(funkcja(1)); 			// 1, 5, 7
console.log(funkcja(1, 10));		// 1, 10, 7
console.log(funkcja(1, 10, 20));	// 1, 10, 20
