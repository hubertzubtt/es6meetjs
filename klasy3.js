class Mebel {
    constructor(cena) {
        console.log("Zbudowalem mebel");
        this.cena = cena;
    }
    podajCene() {
        return this.cena;
    }
}

Mebel();    // rzucony TypeError 
