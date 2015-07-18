define(['app'], function (app) {
    app.register.controller('usingconfirmController', function ($scope, confirm) {
        $scope.doConfirm = function () {
            confirm(
                'Title',
                'Are you sure ?'
            ).then(function () {
                    $scope.result = 'You are sure ?';
                }).catch(function () {
                    $scope.result = 'You are not sure ?';
                });
        }

        $scope.result = '';
    });
});