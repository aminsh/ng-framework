angular.module('appModule').directive('ctagContent', function(){
    return {
        restrict: 'E',
        templateUrl: 'src/core/directives/templates/content-template.html',
        transclude: true,

        link: function(scope, element , attrs){
            debugger;
            scope.title = attrs.title;
        }
    };
});