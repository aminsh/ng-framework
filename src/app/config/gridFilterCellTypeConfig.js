define(['appModule'], function () {
    angular.module('appModule').config(function (gridFilterCellTypeProvider) {

        gridFilterCellTypeProvider.set({
            people: "people",
            product: "product"
        });
    })
})