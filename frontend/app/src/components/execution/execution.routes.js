(function () {
    'use strict';
    angular
        .module('ioMagician.execution')
        .run(appRun);


    /* @ngInject */
    function appRun(routerHelperProvider) {
        routerHelperProvider.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'execution',
                config: {
                    abstract: false,
                    templateUrl: 'src/components/execution/executionMainView.html',
                    url: '/execution',
                    //controller: 'UnitListController',
                    //controllerAs: 'vm'
                }
            }
        ];
    }

})();