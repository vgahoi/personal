angular
    .module('museKartApp.home.services', [])
    .factory('FileUploadService', function($http, API_URL) {

    var urlBase = API_URL + '/users';


      this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }

    return prodFactory;
});