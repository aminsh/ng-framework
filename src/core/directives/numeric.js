define(['appModule', 'kendo/js/kendo.numerictextbox'], function () {
    angular.module('appModule').directive('ctagNumeric', function () {
        return {
            restrict: 'E',
            template: '<input kendo-numerictextbox options="options"/>',
            replace: true,
            scope: {
                model: '=',
                isprice: '@'
            },
            link: function (scope, element, attrs) {
                var option = {
                    decimals: 0
                };

                if (attrs.hasOwnProperty('price'))
                    option.format = 'n0';
                else
                    option.format = '0';

                scope.options = option;
            }
        }
    })
})
