(function () {
    'use strict';
    angular
        .module('ioMagician.execution')
        .run(appRun);


    /* @ngInject */

    appRun.$inject = ['routerHelperProvider', 'sidebarProvider'];
    function appRun(routerHelperProvider, sidebarProvider) {
        routerHelperProvider.configureStates(getStates());
        sidebarProvider.addElement("Aktionen", "execution", "svg-2");
    }

    function getStates() {
        return [
            {
                state: 'execution',
                config: {
                    abstract: false,
                    templateUrl: 'src/components/execution/executionMainView.html',
                    url: '/execution/:partyLocation',
                    controller: 'ExecutionMainController',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();