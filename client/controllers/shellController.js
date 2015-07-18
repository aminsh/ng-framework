define(['app'], function (app) {
    (app.register || app).controller('shell', function shellController($scope, $rootScope ,logger) {
        $scope.title = "پوسته اصلی برنامه";

        $rootScope.auth = {
            isAuth: false,
            user: {}
        };



        $scope.logout = function () {

        }
    })
});
