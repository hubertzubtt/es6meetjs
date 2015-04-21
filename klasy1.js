class Mebel {
    constructor(cena) {
        console.log("Zbudowalem mebel");
        this.cena = cena;
    }
    podajCene() {
        return this.cena;
    }
}

var mebel = new Mebel(120); 	// "Zbudowałem mebel"
console.log(mebel.podajCene()); // 120
console.log(mebel.cena);		// 120
