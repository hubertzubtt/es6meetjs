"use strict";

(function () {
    var _loop = function () {
        var x = i;
        setTimeout(function () {
            console.log(x);
        }, 50);
    };

    for (var i = 0; i < 10; i++) {
        _loop();
    }
})();

