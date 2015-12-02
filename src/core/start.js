requirejs.config({
    baseUrl: '/src',
    urlArgs: 'v=1.0',
    paths: {
        'jQuery': '/bower_components/jquery/jquery.min',
        'angular': '/bower_components/angular/angular.min',
        'angular-animate': '/bower_components/angular-animate/angular-animate.min',
        'angular-route': '/bower_components/angular-route/angular-route.min',
        'angular-resource': '/bower_components/angular-resource/angular-resource.min',
        'angular-sanitize': '/bower_components/angular-sanitize/angular-sanitize.min',
        'angular-translate': '/bower_components/angular-translate/angular-translate.min',
        'angular-translate-loader-url': '/bower_components/angular-translate-loader-url/angular-translate-loader-url.min',
        'linqjs': '/bower_components/linqjs/linq.min',
        'js-helper/index': '/bower_components/js-helper/src/index',
        'js-helper': '/bower_components/js-helper/src',
        'toastr': '/bower_components/toastr/toastr.min',
        'ui-bootstrap-tpls': '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'appModule': 'core/app.module',
        'domReady': 'core/services/domReady',
        'kendo': '/bower_components/js-helper/src/kendo',
        'JalaliDate': '/bower_components/js-helper/src/kendo/JalaliDate',

        'logger': 'core/services/logger',
        'confirm': 'core/services/confirm',
        'translate': 'core/services/translate',
        'routeResolver': 'core/services/routeResolver',
        'routeConfig': 'app/route.config',


        //directives
        'menu': 'core/directives/menu',
        'content': 'core/directives/content'
    },
    shim: {
        'jQuery': {
            exports: 'jQuery'
        },
        'angular': {
            deps: ['jQuery'],
            exports: 'angular'
        },
        'angular-animate': {
            deps: ['angular', 'jQuery'],
            exports: 'angular-animate'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'angular-resource': {
            deps: ['angular'],
            exports: 'angular-resource'
        },
        'angular-sanitize': {
            deps: ['angular'],
            exports: 'angular-sanitize'
        },
        'angular-translate': {
            deps: ['angular'],
            exports: 'angular-translate'
        },
        'angular-translate-loader-url': {
            exports: 'angular-translate-loader-url',
            deps: ['angular-translate']
        },
        'ui-bootstrap-tpls': {
            exports: 'ui-bootstrap-tpls',
            deps: ['angular']
        },
        'appModule': {
            exports: 'appModule',
            deps: [
                'angular-animate',
                'angular-route',
                'angular-resource',
                'angular-sanitize',
                'ui-bootstrap-tpls',
                'angular-translate'
            ]
        },
        'routeResolver': {
            exports: 'routeResolver',
            deps: ['appModule']
        },
        'routeConfig': {
            deps: ['appModule', 'routeResolver'],
            exports: 'routeConfig'
        },
        'domReady': {
            exports: 'domReady',
            deps: ['jQuery']
        },
        'toastr': {
            exports: 'toastr',
            deps: ['jQuery']
        },
        'logger': {
            exports: 'logger',
            deps: ['toastr', 'appModule']
        },
        'confirm': {
            exports: 'confirm',
            deps: ['ui-bootstrap-tpls', 'appModule']
        },
        'translate': {
            exports: 'translate',
            deps: ['appModule']
        },
        'kendo/js/kendo.core': {
            exports: 'kendo/js/kendo.core',
            deps: ['jQuery', 'JalaliDate']
        },
        'kendo/js/messages/kendo.messages.fa-IR': {
            exports: 'kendo/js/messages/kendo.messages.fa-IR',
            deps: ['kendo/js/kendo.grid']
        },
        'kendo/js/cultures/kendo.culture.fa.IR': {
            exports: 'kendo/js/cultures/kendo.culture.fa.IR',
            deps: ['kendo/js/kendo.grid']
        },

        //directives
        'menu': {
            exports: 'menu',
            deps: ['appModule']
        },
        'content': {
            exports: 'content',
            deps: ['appModule']
        }
    }
});

require([
        'js-helper/index',
        'domReady!',
        'routeConfig',
        'menu',
        'content',
        'logger',
        'confirm',
        'translate',
        'core/directives/numeric',
        'core/services/gridFilterCellType',
        'app/config/gridFilterCellTypeConfig',
        'core/translate.config',
        'core/shell/shell',
        'core/services/menuItems',
        'app/config/menuItemsConfig'
    ],
    function () {
        angular.module('appModule').init();
    });