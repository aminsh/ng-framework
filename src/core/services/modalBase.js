define(['appModule'], function (app) {
    appModule.factory('modalBase', function ($modal, $q) {

        /*{controller: string, templateUrl: string, size(optional): string, data: object}*/

        var modalFunction = function (option) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: option.templateUrl,
                controller: option.controller,
                backdrop: true,
                keyboard: false,
                size: option.size, // nothing = normal , 'sm' = small , 'lg' = large
                resolve: {
                    data: function () {
                        return option.data;
                    }
                }
            });

            var deferred = $q.defer();

            modalInstance.result.then(function (result) {
                deferred.resolve(result);
            });

            return deferred.promise;
        };

        return function (option) {
            return {
                show: function (data) {
                    option.data = data;
                    return modalFunction(option)
                }
            }
        };
    });
});