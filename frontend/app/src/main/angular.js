//var ioMagicianApp = angular.module('ioMagicianApp', ['ngMaterial', 'users', 'sideBar']);
//
//ioMagicianApp.config(function ($mdThemingProvider, $mdIconProvider) {
//
//    $mdIconProvider.defaultIconSet("./assets/svg/avatars.svg", 128).icon(
//        "menu", "./assets/svg/menu.svg", 24).icon("share",
//        "./assets/svg/share.svg", 24).icon("google_plus",
//        "./assets/svg/google_plus.svg", 512).icon("hangouts",
//        "./assets/svg/hangouts.svg", 512).icon("twitter",
//        "./assets/svg/twitter.svg", 512).icon("phone",
//        "./assets/svg/phone.svg", 512);
//
//    $mdThemingProvider.theme('default').primaryPalette('brown').accentPalette(
//        'red');
//
//});

angular
    .module('ioMagicianApp', ['ngRoute', 'ngMaterial', 'ioMagicianCommon', 'ioMagicianCore', 'ioMagicianExecution', 'sidebar'])
    .config(function ($mdThemingProvider, $mdIconProvider, $routeProvider) {
        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 512)
            .icon("hangouts", "./assets/svg/hangouts.svg", 512)
            .icon("twitter", "./assets/svg/twitter.svg", 512)
            .icon("phone", "./assets/svg/phone.svg", 512);
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');

        $routeProvider.
            when('/controlableunits', {
                templateUrl: 'src/controlable_unit/view/controlableunit_list.html',
                controller: 'ControlableUnitController'
            }).
            when('/controlableunits/:unitId', {
                templateUrl: 'src/controlable_unit/view/unit.html',
                controller: 'UnitDetailController'
            }).
            when('/execution', {
                templateUrl: 'src/execution/views/main.html',
                controller: 'ExecutionMainController'
            }).
            otherwise({
                redirectTo: '/controlableunits'
            });
    });