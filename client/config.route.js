define(['app'], function (app) {
    app.config(['$routeProvider','$locationProvider' ,'$controllerProvider', '$compileProvider', '$filterProvider', '$provide', 'routeResolverProvider', routeConfigurator]);

        function routeConfigurator($routeProvider,$locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, routeResolveProvider) {

            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            var routes = [
                {url: '/', name: 'home', title: ''},
                {url: '/usingdatepicker', name: 'usingdatepicker'},
                {url: '/usinggridandfilter', name: 'usinggridandfilter'},
                {url: '/usingconfirm', name: 'usingconfirm'}
            ];

            var route = routeResolveProvider.route;

            routes.forEach(function (r) {
                $routeProvider.when(r.url, route.resolve(r.name));
            });
            $routeProvider.otherwise({redirectTo: '/'});

            //$locationProvider.html5Mode(true);
        }
});

