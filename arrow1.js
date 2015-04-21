function Klasa() {
	this.ciagznakow = "Heloł ";
    this.wartosci = [1, 2, 3];
    this.wartosci.forEach(function(cyferka) {
    	console.log(this.ciagznakow, cyferka);
    })
}

new Klasa();