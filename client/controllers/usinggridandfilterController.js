define(['app'], function (app) {
    app.register.controller('usinggridandfilterController', function ($scope) {
        $scope.columns = [
            {name: 'id', title: 'Code', width: '200px', type: 'number'},
            {name: 'firstName', title: 'First name', type: 'string'},
            {name: 'lastName', title: 'Last name', type: 'string'},
            {name: 'birthDate', title: 'Birth date' ,type: 'date' , format: '{0:yyyy/MM/dd}'}
        ];

        $scope.commands = [
            {
                title: 'Edit',
                action: function (current) {
                    $location.path('input/edit/' + current.id);
                    $scope.$apply();
                },
                imageClass: "k-icon k-i-pencil"
            }
        ];

        $scope.gridOption = {};
    })
})