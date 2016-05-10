angular
    .module('museKartApp.prod.services', [])
    .factory('UserService', function($http, API_URL) {

    var urlBase = API_URL + '/users';
    var prodFactory = {};

    prodFactory.getProducts = function() {
        return $http.get(urlBase);
    };

    return prodFactory;
});
