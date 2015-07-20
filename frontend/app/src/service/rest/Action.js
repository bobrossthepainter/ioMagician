angular.module('ioMagicianService').factory("Action", function ($resource, config) {
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