var Modul = (function() {
	var pierwszy = function() { return "a"; }
	var drugi = function() { return "b"; }
	var trzeci = function() { return "c"; }
	return {
		pierwszy: pierwszy,
		drugi: drugi,
		trzeci: trzeci
	};
})();

var LepszyModul = (function() {
	var pierwszy = function() { return "a"; }
	var drugi = function() { return "b"; }
	var trzeci = function() { return "c"; }
	return {
		pierwszy,
		drugi,
		trzeci
	};
})();

