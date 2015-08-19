(function () {
    'use strict';

    angular.module('ioMagician.service').factory("actionService", function ($resource, config) {
        return $resource(config.backend + "/action/:id", null,
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