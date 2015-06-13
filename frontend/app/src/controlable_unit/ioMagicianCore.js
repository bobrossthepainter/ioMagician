(function () {
    'use strict';

    // Prepare the 'sideBar' module for subsequent registration of controllers and delegates
    angular.module('ioMagicianCore', ['ngMaterial', 'ioMagicianCommon', 'ngResource'])
        .filter('controlableUnitIcon', function () {
            return function (input) {
                var def = "./assets/png/default.png";
                if (!input.name) {
                    return def;
                }
                if (input.name.toLowerCase().includes("raspberry")){
                    return "./assets/png/rpi_logo_small.png";
                }
                if (input.name.toLowerCase().includes("node")){
                    return "./assets/png/nodemcu_logo_small.png";
                }
                return def;
            };
        });


})();
