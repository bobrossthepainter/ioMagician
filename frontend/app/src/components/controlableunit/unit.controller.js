(function () {
    'use strict';

    angular
        .module('ioMagician.unit')
        .controller('UnitListController', UnitListController);

    UnitListController.$inject = ['unitService', 'controlableUnitService', '$log', '$state', '$stateParams'];

    function UnitListController(unitService, controlableUnitService, $log, $state, $stateParams) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = '';
        vm.lala = 'yolo';
        vm.units = [{"id": "ads"}];
        vm.go = goTo;

        activate();

        ////////////////

        function activate() {
            controlableUnitService.query(function (data) {
                vm.units = data;
            });
            $log.debug("activate UnitListController done");
            $log.debug("stateParams " + JSON.stringify($stateParams) + $stateParams.partyLocation);
            $log.debug("state params: " + JSON.stringify($state.params));
        }

        function goTo(unit) {
            unitService.getPropertyObject().lastSelectedUnit = unit;
            //$location.path('/controlableunits/' + unit.id);
            $state.go('unit.detail', { unitId: unit.id, unit: unit });
        };

    };

})();
