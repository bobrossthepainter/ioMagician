(function () {
    'use strict';

    // Prepare the 'sideBar' module for subsequent registration of controllers and delegates
    angular.module('ioMagician.unit', ['ngMaterial', 'ioMagician.common', 'ioMagician.service'])
        .filter('unitIcon', function () {
            return function (input) {
                var def = "./assets/img/png/default.png";
                if (!input.name) {
                    return def;
                }
                if (input.name.toLowerCase().includes("raspberry")){
                    return "./assets/img/png/rpi_logo_small.png";
                }
                if (input.name.toLowerCase().includes("node")){
                    return "./assets/img/png/nodemcu_logo_small.png";
                }
                return def;
            };
        });


})();
