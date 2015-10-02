angular.module('appModule', [
    'ngAnimate',
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'ui.bootstrap',
    'pascalprecht.translate'
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

define([])

