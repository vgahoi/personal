angular.module('museKartApp.signUP.controllers', [])
    .controller('SignUPCtrl', ['$window', '$scope', 'SignUPServices', '$timeout', '$location',
        function ($window, $scope, SignUPServices, $timeout, $location) {
            var self = this;
            self.user = {
                username: '',
                password: '',
                repassword: '',
                email: '',
                city: '',
                country: '',
                signUPType: 'Y',
                jobTitle: '',
                company: '',
                industry: '',
                college: '',
                stream: '',
                startYear: '',
                endYear: ''
            };

            init = function () {
                if(SignUPServices.getUser())
                    {
                        self.user =SignUPServices.getUser();
                    }
            };
            init();
            self.yearRange = range(2015, 1990);
            self.toggleRadioButton = function ($event) {
                var sel = $($event.target).data('title');
                var tog = $($event.target).data('toggle');
                self.user.signUPType = sel;

                $('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
                $('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
            };
            self.joinUS = function () {
                SignUPServices.createUser(self.user).then(function (data) {
                    self.goToEmailConfirmation(data);
                });
            };
            self.goToEmailConfirmation = function (data) {
                SignUPServices.setUser(data.data);
                $timeout(function () {
                    $scope.$apply(function () {
                        $scope.user = data.data;
                        $scope.$parent.ctrl.modalPopup = 'modal-dialog emailConfirmation';
                        $location.path('/emailConfirmation');
                        $('#myModal').modal('show');
                    });
                }, 0);
                self.products = data.data;

            };
        }
    ]);