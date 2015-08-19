(function () {
    'use strict';

    angular.module('ioMagician.service').factory("executionCommandService", function ($resource, config) {
        return $resource(config.backend + "/executioncommand/:id", null,
            {
                //articleId: '@id',
                'update': {
                    method: 'PUT',
                    'params': {
                        'id': "@id"
                    }
                },
            });
    });

})();