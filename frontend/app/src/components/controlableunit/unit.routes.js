(function () {
    'use strict';
    angular
        .module('ioMagician.unit')
        .run(appRun);


    /* @ngInject */
    function appRun(routerHelperProvider) {
        routerHelperProvider.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'unit.list',
                config: {
                    abstract: false,
                    templateUrl: 'src/components/controlableunit/unitListView.html',
                    url: '/unit',
                    controller: 'UnitListController',
                    controllerAs: 'vm'
                }
            },
            {
                state: 'unit.detail',
                config: {
                    abstract: false,
                    templateUrl: 'src/components/controlableunit/unitDetailView.html',
                    url: '/unitDetail',
                    controller: 'UnitDetailController',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();