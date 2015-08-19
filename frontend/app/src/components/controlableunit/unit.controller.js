(function () {
    'use strict';

    angular
        .module('ioMagician.unit')
        .controller('UnitListController', UnitListController);

    UnitListController.$inject = ['unitService', 'controlableUnitService', '$log', '$location'];

    function UnitListController(unitService, controlableUnitService, $log, $location) {
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
        }

        function goTo(unit) {
            unitService.getPropertyObject().lastSelectedUnit = unit;
            $location.path('/controlableunits/' + unit.id);
        };

    };

})();
