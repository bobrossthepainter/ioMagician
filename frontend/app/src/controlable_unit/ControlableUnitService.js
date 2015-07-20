(function () {
    'use strict';

    angular.module('ioMagicianCore')
        .service('controlableUnitService', ['config', '$http', 'ControlableUnit', ControlableUnitService]);


    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function ControlableUnitService(config, $http, ControlableUnit) {

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
