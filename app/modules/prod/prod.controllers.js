angular
    .module('museKartApp.prod.controllers', [])
    .controller("UserCtrl", ['UserService',
    function(UserService) {
        var self = this;
        self.products = [];

        UserService.getProducts().then(function(data) {
            self.products = data.data;
        });

    }
]);