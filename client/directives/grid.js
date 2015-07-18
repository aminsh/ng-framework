define(['app', 'kendo'], function (app) {
    (app.register || app).directive('ctagGrid', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                option: '=',
                readUrl: '@',
                pageSize: '=',
                columns: '=',
                commands: '=',
                commandTemplate: '='
            },
            link: function (scope, element, attrs) {
                var cols = scope.columns
                    .toEnumerable().Select(function (col) {
                    return {
                        field: col.name,
                        title: col.title,
                        width: col.width,
                        format: col.format,
                        template: col.template,
                        filterable: getFilterable(col.type)
                    }
                }).ToArray();

                var model = {fields:{}};
                scope.columns.forEach(function (col) {
                    model.fields[col.name] = {type: col.type};
                });

                var commands = scope.commands.
                    toEnumerable().Select(function(cmd) {
                        return {
                            text: cmd.title,
                            imageClass: cmd.imageClass,
                            click: function(e) {
                                var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
                                cmd.action(dataItem);
                                e.preventDefault();
                            }
                        };
                    }).ToArray();

                if (scope.commandTemplate)
                    cols.push({template: kendo.template($(scope.commandTemplate.template).html())});

                cols.push({command: commands});

                var grid = $(element).kendoGrid({
                    dataSource: {
                        transport: {
                            read: {
                                url: attrs.readurl,
                                dataType: "json",
                                contentType: 'application/json; charset=utf-8',
                                type: 'GET'
                            },
                            parameterMap: function (options) {
                                return kendo.stringify(options);
                            }
                        },
                        schema: {
                            data: "Data",
                            total: "Total",
                            model: model
                        },
                        pageSize: scope.pageSize || 20,
                        serverPaging: true,
                        serverFiltering: true,
                        serverSorting: true
                    },
                    filterable: {
                        mode: 'row',
                        operators: {
                            string: {contains: 'Contains'},
                            number: {
                                eq: 'Equal to',
                                gte: "Greater than or equal to",
                                gt: "Greater than",
                                lte: "Less than or equal to",
                                lt: "Less than"
                            },
                            date: {
                                gt: "After",
                                lt: "Before",
                                eq: "Equal"
                            }
                        }
                    },
                    pageable: true,
                    sortable: true,
                    columns: cols
                }).data("kendoGrid");

                if (scope.commandTemplate)
                    scope.commandTemplate.commands.forEach(function (cmd) {
                        $(element).on("click", cmd.selector, function (e) {
                            var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
                            cmd.action(dataItem);
                        });
                    });

                if (!isNullOrEmpty(scope.option))
                    scope.option.refresh = function () {
                        grid.dataSource.read();
                    };

                function getFilterable(type){
                    var filterable = {};

                    if(type == 'string'){
                        filterable.cell =  {
                            operator: "contains",
                            showOperators: false
                        }
                    }

                    if(type == 'number'){
                        filterable.cell =  {
                            operator: "eq"
                        }
                    }

                    return filterable;
                }
            }
        };
    });
});

