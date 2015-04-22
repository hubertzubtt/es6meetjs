var pobierz = function(url) {
    var deferred = new Deferred();

    var request = new xhr();
    xhr.url = url;
    xhr.onSuccess = function(data) {
        deferred.resolve(data);
    };
    xhr.onError = function(error) {
        deferred.reject(error);
    };

    return deferred.promise;
}

pobierz('http://server.com/data.json')
    .then(function(data) {
        console.log("Dostalem dane: ", data);
    })
    .catch(function(error) {
        console.log("Dostalem blad: ", error);
    });
