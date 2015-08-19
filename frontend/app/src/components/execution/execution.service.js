(function () {
    'use strict';

    angular.module('ioMagician.execution')
        .service('executionService', executionService);

    executionService.$inject = ['config', '$http', 'actionService', 'executionCommandService'];


    function executionService(config, $http, actionService, executionCommandService) {

        var propertyObject = {};

        this.getPropertyObject = function() {
            return propertyObject;
        }

    }

})();
