function Klasa() {
	this.ciagznakow = "Hello";
    this.wartosci = [1, 2, 3];
    this.wartosci.forEach(function(cyferka) {
    	console.log(this.ciagznakow, cyferka);
    })
}

function LepszaKlasa() {
	this.ciagznakow = "Hello";
    this.wartosci = [1, 2, 3];
    this.wartosci.forEach((cyferka) => {
    	console.log(this.ciagznakow, cyferka);
    })
}

new Klasa(); 		// TypeError
new LepszaKlasa(); 	// "Hello 1", "Hello 2", "Hello 3"
