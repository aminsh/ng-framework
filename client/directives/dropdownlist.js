define(['app'],function(app){
    app.register.directive('dropdownlist', function(){
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                url: '@',
                valueprop: '@',
                displayprop: '@',
                model: '=',
                data: '=',
                width: '@'
            },
            link: function(scope, element, attrs){

                var dataSource = {};
                if(!isNullOrEmpty(scope.data))
                    dataSource = scope.data;
                else
                    dataSource = {
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
                        schema:{
                            parse: function(response){
                                return response.Data;
                            }
                        }
                    };

                var input = $(element);
                input.css('width', attrs.width);
                input.css('display', 'block');

                var dropdown = input.kendoDropDownList({
                    dataTextField: attrs.displayprop,
                    dataValueField: attrs.valueprop,
                    filter: "contains",
                    autoBind: false,
                    minLength: 2,
                    dataSource: dataSource,
                    select: function(e){
                        var dataItem = this.dataItem(e.item.index());
                        scope.model = dataItem[attrs.valueprop];
                        scope.$apply();
                    }
                }).data("kendoDropDownList");

                scope.$watch('model', function(newValue){
                    dropdown.value(newValue);
                });
            }
        };
    })
});

