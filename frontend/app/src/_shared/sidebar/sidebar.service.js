(function() {
    'use strict';

    angular
        .module('sidebar')
        .provider('sidebarProvider', sidebarProvider);

    sidebarProvider.$inject = [];
    /* @ngInject */
    function sidebarProvider() {
        /* jshint validthis:true */
        this.$get = SidebarHelper;

        // do some init stuff

        SidebarHelper.$inject = [];
        /* @ngInject */
        function SidebarHelper($state) {
            var hasOtherwise = false;

            var service = {
                addElement: addElement
            };

            return service;

            ///////////////

            function addElement(name, target, avatar) {
                states.forEach(function(state) {
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function getStates() { return $state.get(); }
        }
    }

})();
