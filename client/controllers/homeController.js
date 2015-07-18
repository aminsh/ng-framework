define(['app'], function (app) {
    app.register.controller('homeController', function ($scope, logger, $modal, confirm) {
        $scope.title = 'Home';

        logger.success('کاربر گرامی به بازار الکترونیک خوش آمدید');

    });
});