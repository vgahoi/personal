angular
    .module('museKartApp.signUP.services', [])
    .factory('SignUPServices', function ($http, BASE_URL) {
        var urlBase = BASE_URL + '/user';
        var signUPFactory = {};
        var user = null;
        signUPFactory.createUser = function (data) {
            return $http.post(urlBase, data);
        };
        signUPFactory.setUser = function (data) {
            user = data;
        };
        signUPFactory.getUser = function (data) {
            return user;
        };
        return signUPFactory;
    })