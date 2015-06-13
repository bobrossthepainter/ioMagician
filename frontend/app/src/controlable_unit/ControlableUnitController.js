(function () {
    'use strict';

    angular
        .module('ioMagicianCore')
        .controller('ControlableUnitController', [
            'controlableUnitService', 'ControlableUnit', '$log', '$location',
            ControlableUnitController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function ControlableUnitController(controlableUnitService, ControlableUnit, $log, $location) {
        var self = this;
        self.lala = 'yolo';
        //self.units = [];
        self.units = [{"id" : "ads"}];

        // Load all units

        //controlableUnitService
        //    .loadAllControlableUnits(function(data){
        //        if(data){
        //            self.units = data;
        //        } else {
        //            self.units = [ ];
        //        }
        //    });

        ControlableUnit.query(function (data){
            self.units = data;
        });

        self.go = function ( unit ) {
            controlableUnitService.getPropertyObject().lastSelectedUnit = unit;
            $location.path( '/controlableunits/' + unit.id );
        };

        //self.units = ['a' , 'b'];
        //$log.warn('items: ' + JSON.stringify(self.units));
    };

})();
