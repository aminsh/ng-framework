function homeController($scope){
    $scope.title = "Home";
    $scope.save = function (form) {
        debugger;
    }
}

angular.module('appModule').register.controller('homeController', homeController);

define(['appModule'], function (appModule) {

});