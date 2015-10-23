define(['appModule'], function () {
    angular.module('appModule').provider('gridFilterCellType', function () {
        var type = {
            string: "string",
            number: "number"
        }

        function combo(element, option) {
            element.kendoComboBox({
                placeholder: '...',
                dataTextField: option.text,
                dataValueField: option.value,
                valuePrimitive: true,
                filter: "contains",
                autoBind: false,
                minLength: 2,
                dataSource: {
                    type: "json",
                    serverFiltering: true,
                    transport: {
                        read: {
                            url: option.url
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
                }
            });
        }

        function dropdown(element, option) {
            element.kendoDropDownList({
                dataTextField: option.text,
                dataValueField: option.value,
                filter: "contains",
                autoBind: false,
                minLength: 2,
                dataSource: option.data,
                valuePrimitive: true
            })
        }

        this.control = {
            combo: combo,
            dropdown: dropdown
        }

        this.$get = function () {
            debugger;
            return type;
        }

        this.set = function (extendedObject) {
            debugger;
            type = angular.extend(type, extendedObject);
        }
    })
})
