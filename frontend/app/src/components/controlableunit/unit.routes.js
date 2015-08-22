(function () {
    'use strict';
    angular
        .module('ioMagician.unit')
        .run(appRun);


    /* @ngInject */

    appRun.$inject = ['routerHelperProvider'];
    function appRun(routerHelperProvider) {
        routerHelperProvider.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'unit',
                config: {
                    abstract: false,
                    templateUrl: 'src/components/controlableunit/unitListView.html',
                    url: '/unit',
                    controller: 'UnitListController',
                    controllerAs: 'vm'
                }
            },
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
                    url: '/detail/{unitId}',
                    controller: 'UnitDetailController',
                    //controller: function ($stateParams) {
                    //    console.log("gogogl" + JSON.stringify($stateParams));
                    //}
                    controllerAs: 'vm'
                }

            }
        ];
    }

})();