var iterowalny = {
    [Symbol.iterator]() {
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
    }
};

for (var x of iterowalny) {
    console.log(x); // 2, 4, 8, 16
}
