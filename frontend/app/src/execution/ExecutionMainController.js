(function () {
    'use strict';

    angular
        .module('ioMagicianExecution')
        .controller('ExecutionMainController', [
            'ExecutionService', 'Action', '$log', '$location',
            ExecutionMainController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function ExecutionMainController(ExecutionService, Action, $log, $location) {
        var self = this;

        self.actions = [];

        Action.query(function (data){
            self.actions = data;
        });

    };

})();
