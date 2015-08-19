(function () {
    'use strict';

    angular
        .module('ioMagician.execution')
        .controller('ExecutionMainController', ExecutionMainController);

    ExecutionMainController.$inject = ['executionService', 'actionService', '$log', '$location'];


    function ExecutionMainController(executionService, actionService, $log, $location) {
        /* jshint validthis: true */
        var vm = this;

        vm.actions = [];

        activate();

        //////////

        function activate(){
            actionService.query(function (data){
                vm.actions = data;
            });
        }

    };

})();
