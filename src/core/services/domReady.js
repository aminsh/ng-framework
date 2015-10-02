define({
    load: function (name, req, onload, config) {
        var cssfileNames = [
            '/bower_components/bootstrap/dist/css/bootstrap.min.css',
            '/bower_components/bootstrap-rtl/dist/css/bootstrap-rtl.min.css',
            '/bower_components/toaster/toaster.min.css',
            'src/core/content/styles.css',
            'kendo.common.min.css',
            'kendo.material.min.css',
            'kendo.rtl.min.css'
        ];

        $.each(cssfileNames, function (i, item) {
            $('head').append('<link href="'+ item +'"  rel="stylesheet"/>');
        });

        $(function () {
            onload();
        });
    }
});
