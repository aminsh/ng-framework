define({
    load: function (name, req, onload, config) {
        var cssfileNames = [
            '/bower_components/bootstrap/dist/css/bootstrap.min.css',
            '/bower_components/bootstrap-rtl/dist/css/bootstrap-rtl.min.css',
            '/bower_components/toastr/toastr.min.css',
            'src/core/content/styles.css',
            '/bower_components/js-helper/src/kendo/css/kendo.common.min.css',
            '/bower_components/js-helper/src/kendo/css/kendo.bootstrap.min.css',
            '/bower_components/js-helper/src/kendo/css/kendo.rtl.min.css'
        ];

        $.each(cssfileNames, function (i, item) {
            $('head').append('<link href="'+ item +'"  rel="stylesheet"/>');
        });

        $(function () {
            onload();
        });
    }
});
