angular.module('appModule').directive('ctagHeader', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/core/directives/templates/header-template.html',
        replace: true,
        scope: {},
        link: function (scope, element, attrs) {
            $(element).find('.dropdown')
            $('input').click(function () {
                $('.dropdown').addClass('open');
                $('.dropdown').addClass('test-class');
            });
        }
    }
});

angular.module('appModule').directive('ctagTogglemenu', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/core/directives/templates/togglemenu-template.html',
        replace: true,
        scope: {
            menuitems: '='
        },
        transclude: true,
        link: function (scope, element, attrs) {
            $("#menu-toggle").click(function (e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });

            var nav = function () {
                $('.gw-nav > li > a').click(function () {
                    var gw_nav = $('.gw-nav');
                    gw_nav.find('li').removeClass('active');
                    $('.gw-nav > li > ul > li').removeClass('active');

                    var checkElement = $(this).parent();
                    var ulDom = checkElement.find('.gw-submenu')[0];

                    if (ulDom == undefined) {
                        checkElement.addClass('active');
                        $('.gw-nav').find('li').find('ul:visible').slideUp();
                        return;
                    }
                    if (ulDom.style.display != 'block') {
                        gw_nav.find('li').find('ul:visible').slideUp();
                        gw_nav.find('li.init-arrow-up').removeClass('init-arrow-up').addClass('arrow-down');
                        gw_nav.find('li.arrow-up').removeClass('arrow-up').addClass('arrow-down');
                        checkElement.removeClass('init-arrow-down');
                        checkElement.removeClass('arrow-down');
                        checkElement.addClass('arrow-up');
                        checkElement.addClass('active');
                        checkElement.find('ul').slideDown(300);
                    } else {
                        checkElement.removeClass('init-arrow-up');
                        checkElement.removeClass('arrow-up');
                        checkElement.removeClass('active');
                        checkElement.addClass('arrow-down');
                        checkElement.find('ul').slideUp(300);

                    }
                });
                $('.gw-nav > li > ul > li > a').click(function () {
                    $(this).parent().parent().removeClass('active');
                    $('.gw-nav > li > ul > li').removeClass('active');
                    $(this).parent().addClass('active')
                });
            };
            nav();
        }
    }
});