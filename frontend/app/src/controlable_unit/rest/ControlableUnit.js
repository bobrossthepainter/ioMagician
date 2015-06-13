angular.module('ioMagicianCore').factory("ControlableUnit", function ($resource, config) {
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