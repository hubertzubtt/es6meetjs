var pobierz = function(url) {
    return new Promise(function(resolve, reject) {
        var request = new xhr();
        xhr.url = url;
        xhr.onSuccess = function(data) {
            resolve(data);
        };
        xhr.onError = function(error) {
            reject(error);
        };
        xhr.get();
    });
}

pobierz('http://server.com/data.json')
    .then(function(data) {
        console.log("Dostalem dane: ", data);
    })
    .catch(function(error) {
        console.log("Dostalem blad: ", error);
    });
