function homeController($scope, confirm, logger, gridFilterCellType) {
    debugger;
    $scope.title = "Home";
    $scope.save = function (form) {
        debugger;
    }

    $scope.pop = function(){
        confirm('Are U', 'Sure')
            .then(function (result) {
                logger.success();
            })
    };
}

angular.module('appModule').register.controller('homeController', homeController);

define(['appModule'], function (appModule) {

});