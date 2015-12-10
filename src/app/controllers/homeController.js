function homeController($scope, confirm, logger, gridFilterCellType, modalSample) {
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

    $scope.showModal = function () {
        modalSample.show({body: 'Test Modal is successful or not !'})
            .then(function (result) {
                debugger;
            });
    }
}


define(['appModule', 'app/modal/modalSample'], function (appModule) {
    angular.module('appModule').register.controller('homeController', homeController);
});