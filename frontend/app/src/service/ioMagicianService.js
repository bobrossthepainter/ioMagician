(function () {
    'use strict';

    angular.module('ioMagicianService', ['ngResource'])
        .constant('config', {
            'backend': 'http://localhost:1337',
            'version': 0.1
        });


})();
