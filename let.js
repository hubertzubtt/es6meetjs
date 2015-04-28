(function() {
    for (var i = 0; i < 10; i++) {
    	var x = i;
    	setTimeout(function() {
    		console.log("a", x);
    	}, 50);
    }
})();

(function() {
    for (let i = 0; i < 10; i++) {
    	setTimeout(function() {
    		console.log("b", i);
    	}, 50);
    }
})();
