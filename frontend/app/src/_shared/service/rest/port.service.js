(function () {
    'use strict';

    angular.module('ioMagician.service').factory("portService", function ($resource, config) {
        return $resource(config.backend + "/port/:id", null,
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