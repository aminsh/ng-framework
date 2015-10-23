define(['kendo/js/kendo.grid'], function (appModule) {
    angular.module('appModule').directive('ctagGrid', function (gridFilterCellType) {
        return {
            restrict: 'E',
            template: '<div kendo-grid options="options"></div>',
            scope: {
                control: '=',
                datasource: '=',
                readUrl: '@',
                pageSize: '=',
                columns: '=',
                commands: '=',
                commandTemplate: '=',
                filterable: '@'
            },
            link: function (scope, element, attrs) {
                var cols = scope.columns
                    .asEnumerable().select(function (col) {
                        return {
                            field: col.name,
                            title: col.title,
                            width: col.width,
                            format: col.format,
                            template: col.template,
                            filterable: getFilterable(col.type)
                        }
                    }).toArray();

                var model = {fields: {}};
                scope.columns.forEach(function (col) {
                    model.fields[col.name] = {type: col.type};
                });

                var commands = scope.commands.
                    asEnumerable().select(function (cmd) {
                        return {
                            text: cmd.title,
                            imageClass: cmd.imageClass,
                            click: function (e) {
                                var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
                                cmd.action(dataItem);
                                e.preventDefault();
                            }
                        };
                    }).toArray();

                if (scope.commandTemplate)
                    cols.push({template: kendo.template($(scope.commandTemplate.template).html())});

                cols.push({command: commands});

                var filterable = attrs.filterable == 'false' ? false : {
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
                };
                scope.options = {
                    dataSource: scope.datasource || new kendo.data.DataSource({
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
                            data: "data",
                            total: "total",
                            model: model
                        },
                        pageSize: scope.pageSize || 20,
                        serverPaging: true,
                        serverFiltering: true,
                        serverSorting: true
                    }),
                    filterable: filterable,
                    pageable: {refresh: true},
                    sortable: true,
                    columns: cols
                };

                if (scope.commandTemplate)
                    scope.commandTemplate.commands.forEach(function (cmd) {
                        $(element).on("click", cmd.selector, function (e) {
                            var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
                            cmd.action(dataItem);
                        });
                    });

                if (scope.option)
                    scope.option.refresh = function () {
                        scope.options.dataSource.read();
                    };

                function getFilterable(type) {
                    var filterable = {};

                    filterable.cell = gridFilterCellType[type];

                    return filterable;
                }
            }
        };
    });
});

