(function () {
    'use strict';

    angular.module('ioMagicianExecution')
        .service('ExecutionService', ['config', '$http', 'Action', 'ExecutionCommand', ExecutionService]);


    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function ExecutionService(config, $http, Action, ExecutionCommand) {

        var propertyObject = {};

        this.getPropertyObject = function() {
            return propertyObject;
        }

    }

})();
