(function () {
    'use strict';

    angular.module('ioMagician.service').factory("controlableUnitService", function ($resource, config) {
        return $resource(config.backend + "/controlableunit/:id", null,
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