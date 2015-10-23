requirejs.config({
    baseUrl: '/src',
    urlArgs: 'v=1.0',
    paths: {
        'jQuery': '/bower_components/jquery/dist/jquery.min',
        'angular': '/bower_components/angular/angular.min',
        'angular-animate': '/bower_components/angular-animate/angular-animate.min',
        'angular-route': '/bower_components/angular-route/angular-route.min',
        'angular-resource': '/bower_components/angular-resource/angular-resource.min',
        'angular-sanitize': '/bower_components/angular-sanitize/angular-sanitize.min',
        'angular-translate': '/bower_components/angular-translate/angular-translate.min',
        'linq': '/bower_components/linqjs/linq.min',
        'toastr': '/bower_components/toastr/toastr.min',
        'ui-bootstrap-tpls': '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'appModule': 'core/app.module',
        'domReady': 'core/services/domReady',

        //kendo
        'kendo/js/core': '/bower_components/js-helper/src/kendo/js/kendo.core',
        'kendo/js/grid': '/bower_components/js-helper/src/kendo/js/kendo.grid',
        'kendo/js/datepicker': '/bower_components/js-helper/src/kendo/js/kendo.datepicker',
        'kendo/js/combobox': '/bower_components/js-helper/src/kendo/js/kendo.combobox',
        'kendo/js/dropdown': '/bower_components/js-helper/src/kendo/js/kendo.dropdownlist',
        'kendo/js/messages/fa-IR': '/bower_components/js-helper/src/kendo/js/messages/kendo.messages.fa-IR',
        'kendo/js/culture/fa-IR': '/bower_components/js-helper/src/kendo/js/messages/cultures/kendo.culture.fa.IR',
        'JalaliDate': '/bower_components/js-helper/src/kendo/jalaliDate',

        //'plupload': 'lib/external/plupload.full.min',
        //'inifinitescroll': 'lib/external/jquery.infinitescroll',
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
        'kendo/js/core': {
            exports: 'kendo/js/core',
            deps: ['jQuery', 'JalaliDate']
        },
        'kendo/js/grid': {
            exports: 'kendo/js/grid',
            deps: ['kendo/js/core']
        },
        'kendo/js/grid': {
            exports: 'kendo/js/grid',
            deps: ['kendo/js/core']
        },
        'kendo/js/messages/fa-IR': {
            exports: 'kendo/js/messages/fa-IR',
            deps: ['kendo/js/grid']
        },
        'kendo/js/culture/fa-IR': {
            exports: 'kendo/js/culture/fa-IR',
            deps: ['kendo/js/grid']
        },
        'kendo/js/datepicker': {
            exports: 'kendo/js/datepicker',
            deps: ['kendo/js/core']
        },
        'JalaliDate': {
            exports: 'JalaliDate'
        },
        //'plupload': {exports: 'plupload', deps: ['jQuery']},
        //'inifinitescroll': {exports: 'inifinitescroll', deps: ['jQuery']}

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
        'domReady!',
        'routeConfig',
        'menu',
        'content',
        'logger',
        'confirm',
        'translate'
    ],
    function () {
        angular.module('appModule').init();
    });