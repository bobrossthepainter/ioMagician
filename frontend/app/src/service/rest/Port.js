angular.module('ioMagicianService').factory("Port", function ($resource, config) {
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