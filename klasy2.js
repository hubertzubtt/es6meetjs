class Mebel {
    constructor(cena) {
        console.log("Zbudowalem mebel");
        this.cena = cena;
    }
    podajCene() {
        return this.cena;
    }
}

class Stol extends Mebel {
	constructor(cena) {
        console.log("Zbudowalem stol");
        super(cena * 2);
    }
}

var mebel = new Stol(120); 	    // "Zbudowalem stol", "Zbudowalem mebel"
console.log(mebel.podajCene()); // 240
