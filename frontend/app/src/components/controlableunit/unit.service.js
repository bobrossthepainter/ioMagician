(function () {
    'use strict';

    angular.module('ioMagician.unit')
        .service('unitService', unitService);

    unitService.$inject = ['config', '$http', 'controlableUnitService'];

    function unitService(config, $http, controlableUnitService) {

        this.loadAllControlableUnits = function (cb) {
            var backend = config.backend;

            $http.get(backend + '/controlableunit').
                success(function (data, status, headers, config) {
                    cb(data);
                }).
                error(function (data, status, headers, config) {
                    cb();
                });
        };

        this.changePortValue = function (port, cb) {
            var backend = config.backend;

            $http.get(backend + '/port/execute/' + port.id).
                success(function (data, status, headers, config) {
                    cb(data);
                }).
                error(function (data, status, headers, config) {
                    cb();
                });
        };

        var propertyObject = {};

        this.getPropertyObject = function() {
            return propertyObject;
        }




    }

})();
