(function () {

    angular
        .module('ioMagicianCore')
        .controller('UnitDetailController', [
            'controlableUnitService', 'ControlableUnit', '$routeParams', '$mdBottomSheet', '$log', '$q', '$mdDialog',
            UnitDetailController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $routeParams
     * @param avatarsService
     * @constructor
     */
    function UnitDetailController(controlableUnitService, ControlableUnit, $routeParams, $mdBottomSheet, $log, $q, $mdDialog) {

        var self = this;
        self.unitId = $routeParams.unitId;
        self.unit = angular.copy(controlableUnitService.getPropertyObject().lastSelectedUnit);
        $log.debug("init UnitDetailController: " + self.unit.name)

        self.showEditUnitDialog = function (ev) {
            $mdDialog.show({
                controller: UnitDetailController,
                templateUrl: './src/controlable_unit/view/unit_edit.html',
                parent: angular.element(document.body),
                targetEvent: ev,
            })
                .then(function (data) {
                    $log.debug("saving: " + data.name)
                    self.unit = data;
                    ControlableUnit.update(self.unit.id, self.unit);
                    controlableUnitService.getPropertyObject().lastSelectedUnit = self.unit;
                }, function () {
                    //self.unit = angular.copy(controlableUnitService.getPropertyObject().lastSelectedUnit);
                    $log.debug("canceled... " + self.unit.name)
                });
        };

        self.hide = function () {
            $mdDialog.hide();
        };
        self.cancel = function () {
            $mdDialog.cancel();
        };
        self.save = function () {
            $mdDialog.hide(self.unit);
        };

    };

})();
