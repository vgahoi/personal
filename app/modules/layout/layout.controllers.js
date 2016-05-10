angular.module('museKartApp.layout.controllers', [])
    .controller('HomeCtrl', ['$window', '$scope', '$timeout', '$location',
        function ($window, $scope, $timeout, $location) {
            var self = this;
            init = function () {
                if ($location.path() === '/home') {
                    $('#myModal').modal('hide');
                    $('#homeScreen').hide();
                    $('#dashboardScreen').show();
                } else {
                    $('#homeScreen').show();
                    $('#dashboardScreen').hide();
                }
            };
            init();
            
        }
    ]);