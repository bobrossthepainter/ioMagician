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

(function () {
    'use strict';

    angular
        .module('ioMagician')
        .config(routes);

    function routes($routeProvider){

            $routeProvider.
                when('/controlableunits', {
                    templateUrl: 'src/components/controlableunit/unitListView.html',
                    controller: 'UnitListController',
                    controllerAs: 'vm'
                }).
                when('/controlableunits/:unitId', {
                    templateUrl: 'src/components/controlableunit/unitDetailView.html',
                    controller: 'UnitDetailController',
                    controllerAs: 'vm'
                }).
                when('/execution2', {
                    templateUrl: 'src/components/execution/executionMainView.html'
                }).
                otherwise({
                    redirectTo: '/controlableunits'
                });
        };

})();