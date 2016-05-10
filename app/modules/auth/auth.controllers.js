angular
    .module('museKartApp.auth.controllers', [])
    .controller('LoginCtrl', ['$window', '$timeout', '$scope', '$location', 'UserAuthFactory', 'AuthenticationFactory',
        function ($window, $timeout, $scope, $location, UserAuthFactory, AuthenticationFactory) {
            var self = this;
            self.user = {
                username: 'admin',
                password: 'admin'
            };
            self.signUP = function () {
                $timeout(function () {
                    $scope.$apply(function () {
                        $scope.$parent.ctrl.modalPopup='modal-dialog signUPModal';
                        $location.path('/signUP');
                        //$('#signUp').modal('show');
                    });
                }, 0);
            };
            self.signIN = function () {
                $timeout(function () {
                    $scope.$apply(function () {
                        $location.path('/login');
                    });
                }, 0);
            };
            self.login = function () {
                var username = self.user.username,
                    password = self.user.password;
                if (username !== undefined && password !== undefined) {
                    UserAuthFactory.login(username, password).success(function (data) {

                        AuthenticationFactory.setAuth(true, data.user, data.token);

                        $window.sessionStorage.token = data.token;
                        $window.sessionStorage.user = JSON.stringify(data.user); // to fetch the user details on refresh

                        $location.path("/home");

                    }).error(function (status) {
                        alert('Oops something went wrong!');
                    });
                } else {
                    alert('Invalid credentials');
                }
            };
        }
    ]);