var funkcja = function(x, ...y) {
    console.log(y);
}

funkcja("a", 1, 2, 3, 4) // [1,2,3,4]

var funkcja2 = function(x, y, z) {
    console.log(x * y * z);
}

funkcja2(...[2, 4, 5]) // 40
