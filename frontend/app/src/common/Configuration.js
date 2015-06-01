(function () {
    'use strict';

    angular.module('configuration', [])
        .service('configurationService', ['$http', ConfigurationService])
        .constant('config', {
            'backend': 'http://localhost:1337',
            'version': 0.1
        });

    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function ConfigurationService($http) {

        var config;

        $http.get('config/config.json').success(function (data) {
            config = data;
        });

        // Promise-based API
        return config;
    };


})();
