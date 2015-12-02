define(['appModule'], function () {
    appModule.controller('shell', function ($scope, menuItems) {
        $scope.title = "shell";
        $scope.menuItems = menuItems;

        $scope.toggleMenu = false;

        $scope.toggle = function () {
            if ($scope.toggleMenu)
                $scope.toggleMenu = false;
            else
                $scope.toggleMenu = true;
        };
    })
})
