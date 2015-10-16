angular.module('appModule')
    .factory('translate', function ($filter) {
        return function (key) {
            return $filter('translate')(key);
        }
    });
