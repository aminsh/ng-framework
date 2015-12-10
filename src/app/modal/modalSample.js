function modalSampleCtrl($scope, $modalInstance, data) {
    $scope.title = 'Modal Sample';
    $scope.body = data.body;


    $scope.ok = function () {
        $modalInstance.close({result: 'ok'});
    }
}

function modalSample(modalBase) {
    return modalBase({
        controller: 'modalSampleCtrl',
        templateUrl: 'src/app/modal/templates/modalSample.html'
    })
}

define(['appModule'], function () {
    appModule.register.controller('modalSampleCtrl', modalSampleCtrl)
    appModule.register.factory(modalSample.name, modalSample);
})