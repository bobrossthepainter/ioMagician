(function () {
    'use strict';

    angular
        .module('ioMagician.unit')
        .controller('UnitDetailController', UnitDetailController);

    UnitDetailController.$inject = ['unitService', 'controlableUnitService', 'portService', '$socket', '$mdBottomSheet', '$log', '$q', '$mdDialog', '$stateParams', '$state'];


    function UnitDetailController(unitService, controlableUnitService, portService, $socket, $mdBottomSheet, $log, $q, $mdDialog, $stateParams, $state) {
        /* jshint validthis: true */
        var vm = this;
        var unitId = $stateParams.unitId;

        vm.unit = angular.copy(unitService.getPropertyObject().lastSelectedUnit);
        vm.changePortState = changePortState;
        vm.showEditUnitDialog = showEditUnitDialog;

        activate();


        ///////


        function activate() {
            if (!vm.unit){
                controlableUnitService.get({id:unitId}, function(controlableUnit) {
                    $log.debug("received unit for unitId " + unitId + ": " +JSON.stringify(controlableUnit));
                    vm.unit = controlableUnit;
                });
            }
            $socket.on('controlableunit', function (data) {
                $log.debug("socket connected UnitDetailController: " + data);
                vm.unit = data.data;
            });

            $log.debug("activate UnitDetailController for unit: " + unitId + " done.");
            //$log.debug("unit id: " + unitId);
            $log.debug("stateDotparams: " + JSON.stringify($state.params));
            $log.debug("stateParams: " + JSON.stringify($stateParams));
        }


        function changePortState(port) {
            $log.debug("port value change for " + port.name + " - " + port.portAddress + " to " + port.value + " requested.");
            portService.update(port.id, port, function (response) {
                //success function
                unitService.changePortValue(port, function () {
                    $log.debug("port change executed! ");
                });
            }, function (response) {
                //error function
                $log.debug("err ");
            });
        };

        function showEditUnitDialog(ev) {
            $mdDialog.show({
                //controller: UnitDetailController,
                templateUrl: './src/components/controlableunit/unitDetailEditView.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                controller: DialogController,
                locals: {
                    unit: vm.unit,
                },
                controllerAs: 'vm'

            })
                .then(function (data) {
                    $log.debug("saving: " + data.name)
                    //vm.unit = data;
                    //$socket.emit('get', {url:'/controlableunit/subscribe', data:{message:data}}, function (response) {
                    //    vm.unit = response;
                    //});
                    controlableUnitService.update(unitId, data);
                    unitService.getPropertyObject().lastSelectedUnit = vm.unit;
                }, function () {
                    //vm.unit = angular.copy(controlableUnitService.getPropertyObject().lastSelectedUnit);
                    $log.debug("canceled... " + vm.unit.name)
                });
        };

        function DialogController($mdDialog, unit){
            var vm = this;
            vm.unit = unit;

            $log.debug("init DialogController: " + unit.name);

            vm.hide = function () {
                $mdDialog.hide();
            };
            vm.cancel = function () {
                $mdDialog.cancel();
            };
            vm.save = function () {
                $mdDialog.hide(vm.unit);
            };
        };
    };

})();
