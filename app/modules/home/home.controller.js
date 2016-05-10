angular.module('museKartApp.home.controllers', [])
    .controller('AppHomeCtrl', ['$window', '$scope', '$timeout', '$location',
        function ($window, $scope, $timeout, $location) {
            var self = this;
            self.operation = null;
            self.homeScreen = 'home';
            self.homeScreenUrl = 'modules/layout/homepage.html';
            self.profilePageUrl = 'modules/layout/profilePage.html';
            self.connectionPageUrl = 'modules/layout/connectionPage.html';
            self.jobPageUrl = 'modules/layout/jobPage.html';
            
            self.screenUrl = 'modules/layout/homeScreen.html';
            self.type = {
                intro: "Introduction",
                education: 'Education',
                experience: 'Experience',
                skills: 'Skills',
                portfolio: 'Portfolio',
                bespokeURL: 'Bespoke URL'
            };
            self.data = {
                intro: "Introduction",
                education: [{class:'',name:'',year:'',per:''}],
                experience: 'Experience',
                skills: 'Skills',
                portfolio: 'Portfolio',
                bespokeURL: 'Bespoke URL'
            };
            self.connections = [
                {
                    img:"",
                    name:'Praya Khare',
                    position:'Senior Architect',
                    company:'Thomas Associate'
                },{
                    img:"",
                    name:'Praya Khare',
                    position:'Senior Architect',
                    company:'Thomas Associate'
                }
                ,{
                    img:"",
                    name:'Praya Khare',
                    position:'Senior Architect',
                    company:'Thomas Associate'
                }
            ];
            self.companies = [
                {
                    logo:"",
                    name:'Larsen And Turbo',
                },{
                    logo:"",
                    name:'Larsen And Turbo',
                }
                
            ];


            self.signUP = function () {
                $timeout(function () {
                    $scope.$apply(function () {
                        // $('#myModal').width('50%')
                        self.modalPopup = 'modal-dialog signUPModal';
                        $location.path('/signUP');
                        $('#myModal').modal('show');
                        for (i = new Date().getFullYear(); i > 1900; i--) {
                            $('#startYear').append($('<option />').val(i).html(i));
                            $('#endYear').append($('<option />').val(i).html(i));
                        }
                    });
                }, 0);
            };
            self.signIN = function () {
                $timeout(function () {
                    $scope.$apply(function () {
                        self.modalPopup = 'modal-dialog loginModal';
                        $location.path('/login');
                        $('#myModal').modal('show');
                    });
                }, 0);
            };
            
            self.showView = function(isHomeScreen){
                self.homeScreen = isHomeScreen;
            }
            self.edit = function (operation, readonly) {
                self.operation =operation;
                self.buildEditData(operation);
                self.readOnly = readonly;
                $('#detailsPopup').modal('show');
            };
            self.makeEditable = function () {
                self.readOnly = false;
            };
            self.buildEditData = function (operation) {
                self.headerName = self.type[operation];
                self.bodyText = self.data[operation];
            };
            self.updateData = function () {
                self.data[self.operation] = self.bodyText;
                $('#detailsPopup').modal('hide');
            };
        }
    ]);