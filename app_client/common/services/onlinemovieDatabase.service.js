(function() {

    angular
        .module('survivorApp')
        .service('OmdbData', omdbData);

    omdbData.$inject = ['$http'];

    function omdbData($http) {
        var getOmdb = function(lat, lon) {
            //darkskyapi/:lat/:lon
             //var omdburl = 'http://www.omdbapi.com/?t=' + t + '&y=' + y +"&apikey=" + process.env.OMDB_KEY;
            return $http.get('www.omdbapi.com?t=Survivor&y=2001&apikey=8f04f045')
            //return $http.get('/api/darkskyapi' + '/' + lat + '/' + lon);
        };
        
        return {
            getOmdb: getOmdb,
        };
    }
})();
