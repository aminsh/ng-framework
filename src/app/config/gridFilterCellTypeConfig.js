define(['appModule'], function () {
    angular.module('appModule').config(function (gridFilterCellTypeProvider) {

        var employee = {
            showOperators: false,
            template: function (args) {
                gridFilterCellTypeProvider
                    .control
                    .combo(args.element, {
                        url: 'api/employees',
                        display: 'title',
                        value: 'id'
                    });
            }
        };

        gridFilterCellTypeProvider.set({
           employee: employee
        });
    })
})