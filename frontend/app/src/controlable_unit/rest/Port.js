angular.module('ioMagicianCore').factory("Port", function($resource, config) {
    return $resource("/port/:id");
});