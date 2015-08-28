(function () {
    'use strict';

    angular.module('ioMagician.execution')
        .service('executionService', executionService);

    executionService.$inject = ['config', '$http', 'actionService', 'executionCommandService'];


    function executionService(config, $http, actionService, executionCommandService) {

        var vm = this;

        var backend = config.backend;
        var propertyObject = {};

        vm.getPropertyObject = getPropertyObject;
        vm.getAllActions = getAllActions;


        function getPropertyObject() {
            return propertyObject;
        }

        function getAllActions(cb) {

            $http.get(backend + '/action/commands/').
                success(function (data, status, headers, config) {
                    cb(data);
                }).
                error(function (data, status, headers, config) {
                    cb();
                });
        };

    }

})();
