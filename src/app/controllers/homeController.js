function homeController($scope, confirm, logger, gridFilterCellType) {
    ;
    $scope.title = "Home";
    $scope.save = function (form) {

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