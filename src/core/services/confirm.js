    angular.module('appModule')
        .controller('confirmCtrl', function ($scope, $modalInstance, data) {
            $scope.title = data.title;
            $scope.message = data.message;

            $scope.ok = function () {
                $modalInstance.close(true);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss(false);
            };
        })
        .factory('confirm', function ($modal, $q, $templateCache) {
            $templateCache.put('confirm_template.html',
                '<div class="modal-header">' +
                ' <h5 class="modal-title">{{title}}</h5>' +
                '</div>' +
                '<div class="modal-body">' +
                '    <span>{{message}}</span>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button class="btn btn-primary" ng-click="ok()">{{"CONFIRM"| translate}}</button>' +
                '<button class="btn btn-default" ng-click="cancel()">{{"CANCEL"| translate}}</button>' +
                '</div>');
            return function (title, message) {

                var modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'confirm_template.html',
                    controller: 'confirmCtrl',
                    backdrop: true,
                    keyboard: false,
                    size: 'sm',
                    resolve: {
                        data: function () {
                            return {title: title, message: message};
                        }
                    }
                });

                var deferred = $q.defer();

                modalInstance.result.then(function (result) {
                    deferred.resolve(result);
                }, function (a) {
                    debugger;
                    //$log.info('Modal dismissed at: ' + new Date());
                });

                return deferred.promise;
            }
        });

