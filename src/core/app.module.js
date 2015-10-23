define(['kendo/js/kendo.angular'], function () {
    angular.module('appModule', [
        'ngAnimate',
        'ngRoute',
        'ngResource',
        'ngSanitize',
        'ui.bootstrap',
        'pascalprecht.translate',
        'kendo.directives'
    ])
        .config(function ($routeProvider,
                          $locationProvider,
                          $controllerProvider,
                          $compileProvider,
                          $filterProvider,
                          $provide) {
            angular.module('appModule').register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };
        })
        .init = function () {
        angular.bootstrap(document, ['appModule']);
    };
})

