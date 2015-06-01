(function () {
    'use strict';

    angular.module('controlableUnits')
        .service('controlableUnitService', ['config', '$http', ControlableUnitService]);


    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function ControlableUnitService(config, $http) {

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
    }

})();
