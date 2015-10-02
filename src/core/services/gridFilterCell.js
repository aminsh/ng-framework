define(['appModule', 'kendo'], function (appModule) {

    appModule.factory('gridFilterCell', function (enums) {

        function combo(element,option) {
            element.kendoComboBox({
                placeholder: '...',
                dataTextField: option.display,
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
                    schema:{
                        parse: function(response){
                            return response.Data;
                        }
                    }
                }});
        }
        function dropdown(element, option){
            element.kendoDropDownList({
                dataTextField: option.display,
                dataValueField: option.value,
                filter: "contains",
                autoBind: false,
                minLength: 2,
                dataSource: option.data,
                valuePrimitive: true
            })
        }

        var string = {
            operator: "contains",
            showOperators: false
        }

        var number = {
            operator: "eq"
        }

        return {
            type: {
                string: string,
                number: number
            },
            control:{
                combo: combo,
                dropdown: dropdown()
            }
        };
    });
});
