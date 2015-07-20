angular.module('ioMagicianService').factory("ExecutionCommand", function ($resource, config) {
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