define(['appModule'], function () {
    debugger;
    appModule.controller('shell', function ($scope, menuItems) {
        $scope.title = "shell";
        $scope.menuItems = menuItems;
    })
})
