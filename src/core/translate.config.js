define(['appModule', 'angular-translate-loader-url'], function () {
    appModule.config(function ($translateProvider) {
        $translateProvider.useUrlLoader('bar.json');
        $translateProvider.preferredLanguage('en_US');
        $translateProvider.useSanitizeValueStrategy('escapeParameters');
    });
});