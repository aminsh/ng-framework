define(['appModule', 'kendo/js/kendo.combobox'], function (appModule) {
    appModule.directive('ctagCombo', function () {
        return {
            restrict: 'E',
            replace: true,
            template: '<input kendo-combo-box  options="options"/>',
            scope: {
                url: '@',
                value: '@',
                text: '@',
                placeholder: '@',
                width: '@',
                select: '&'
            },
            link: function (scope, element, attrs) {
                var input = $(element);
                input.css('width', attrs.width);
                input.css('display', 'block');

                scope.options = {
                    placeholder: attrs.placeholder,
                    dataTextField: attrs.text,
                    dataValueField: attrs.value,
                    filter: "contains",
                    autoBind: false,
                    minLength: 2,
                    dataSource: {
                        type: "json",
                        serverFiltering: true,
                        transport: {
                            read: {
                                url: attrs.url
                            },
                            parameterMap: function (options) {
                                return kendo.stringify(options);
                            }
                        },
                        schema: {
                            parse: function (response) {
                                return response.Data;
                            }
                        }
                    },
                    select: function (e) {
                        var dataItem = this.dataItem(e.item.index());

                        if (scope.select) {
                            scope.select({item: dataItem});
                        }
                    },
                    change: function (e) {
                        if (combo.value()) {
                            scope.model = null;
                            scope.$apply();
                        }
                    }
                };
            }
        };
    })
});
