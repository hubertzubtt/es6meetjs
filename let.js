(function() {
    for (var i = 0; i < 10; i++) {
    	let x = i;
    	setTimeout(function() {
    		console.log(x);
    	}, 50);
    }
})();
