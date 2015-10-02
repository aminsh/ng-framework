angular.module('appModule')
    .config(function ($routeProvider, routeResolverProvider) {
        var resolve = routeResolverProvider.route.resolve;

        routeResolverProvider.routeConfig.setBaseDirectories(
            'src/app/views/',
            'src/app/controllers/'
        );

        $routeProvider
            .when('/', resolve('home'))
            .otherwise('/NotFound');
    });
