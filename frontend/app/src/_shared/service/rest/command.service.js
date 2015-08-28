(function () {
    'use strict';

    angular.module('ioMagician.service').factory("commandService", function ($resource, config) {
        return $resource(config.backend + "/command/:id", null,
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