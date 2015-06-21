﻿requirejs.config({
    baseUrl: '/client',
    urlArgs: 'v=1.0',
    paths: {
        'external': 'lib/external',
        'helper': 'lib/helper',
        'jQuery': 'lib/external/jquery-2.1.1.min',
        'angular': 'lib/external/angular.min',
        'angular-animate': 'lib/external/angular-animate.min',
        'angular-route': 'lib/external/angular-route.min',
        'angular-resource': 'lib/external/angular-resource.min',
        'angular-sanitize': 'lib/external/angular-sanitize.min',
        'angular-translate': 'lib/external/angular-translate',
        'linq': 'lib/external/linq.min',
        'helper-window': 'lib/helper/helper.window',
        'helper_array': 'lib/helper/helper.array',
        'bootstrap': 'lib/external/bootstrap-rtl',
        'ui-bootstrap': 'lib/external/ui-bootstrap.min',
        'ui-bootstrap-tpls': 'lib/external/ui-bootstrap-tpls.min',
        'domReady': 'lib/helper/domReady',
        'kendo': 'lib/external/kendo.all.min',
        'date-fa-Ir': 'lib/external/datetools/fa-IR',
        'date-JalaliDate': 'lib/external/datetools/JalaliDate',
        'date-core': 'lib/external/datetools/kendo.core',
        'date-calendar': 'lib/external/datetools/kendo.calendar',
        'date-datepicker': 'lib/external/datetools/kendo.datepicker',
        'date-popup': 'lib/external/datetools/kendo.popup',
        'toastr': 'lib/external/toastr.min',

        'calendar': 'lib/external/calendar',
        'jquery-Bootstrap-PersianDateTimePicker': 'lib/external/jquery.Bootstrap-PersianDateTimePicker',

        'persian-date': 'lib/external/persian-date/persian-date-0.1.8.min',
        'persian-datepicker': 'lib/external/persian-date/persian-datepicker-0.4.5.min',

        'plupload': 'lib/external/plupload.full.min',
        'inifinitescroll': 'lib/external/jquery.infinitescroll',
        'logger': 'service/logger',
        'confirm': 'service/confirm'
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
        'bootstrap': {
            exports: 'bootstrap',
            deps: ['jQuery']
        },
        'ui-bootstrap-tpls': {exports: 'ui-bootstrap-tpls', deps: ['angular']},
        'linq': {exports: 'linq'},
        'helper-window': {deps: ['jQuery'], exports: 'helper-window'},
        'helper_array': {
            deps: ['linq'],
            exports: 'helper_array'
        },
        'app': {
            deps: ['angular'],
            exports: 'app'
        },
        'config.route': {
            deps: ['angular'],
            exports: 'config.route'
        },
        'domReady': {
            exports: 'domReady',
            deps: ['jQuery']
        },
        'kendo': {exports: 'kendo', deps: ['jQuery']},
        'date-JalaliDate': {exports: 'date-JalaliDate'},
        'date-core': {exports: 'date-core'},
        'date-calendar': {exports: 'date-calendar', deps: ['date-core']},
        'date-popup': {exports: 'date-popup', deps: ['date-core']},
        'date-datepicker': {exports: 'date-datepicker', deps: ['date-calendar', 'date-popup']},
        'date-fa-Ir': {exports: 'date-fa-Ir', deps: ['date-calendar', 'date-JalaliDate']},
        'toastr': {exports: 'toastr', deps: ['jQuery']},
        'logger': {exports: 'logger', deps: ['toastr']},
        'confrm': {exports: 'conform', deps: ['ui-bootstrap-tpls']},

        'persian-date': {exports: 'persian-date', deps: ['jQuery']},
        'persian-datepicker': {exports: 'persian-datepicker', deps: ['persian-date']},

        'jquery-Bootstrap-PersianDateTimePicker': { exports: 'jquery-Bootstrap-PersianDateTimePicker', deps: ['bootstrap', 'calendar'] },

        'plupload': {exports: 'plupload', deps: ['jQuery']},
        'inifinitescroll': {exports: 'inifinitescroll', deps: ['jQuery']}
    }
});

require([
        'angular-animate',
        'angular-route',
        'angular-resource',
        'angular-sanitize',
        'angular-translate',
        'bootstrap',
        'helper-window',
        'helper_array',
        'app',
        'config.route',
        'config.translate',
        'controllers/shellController',

        'directives/content',
        'directives/numeric',

        'logger',
        'confirm',
        'service/translate',

        'jquery-Bootstrap-PersianDateTimePicker',
        'domReady!'
    ],
    function () {
        angular.bootstrap(document, ['app']);
    });