(function () {

    angular
        .module('controlableUnits')
        .controller('ControlableUnitController', [
            'controlableUnitService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
            ControlableUnitController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function ControlableUnitController(controlableUnitService, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;
        self.lala = 'yolo';
        self.units = [];

        // Load all registered users

        controlableUnitService
            .loadAllControlableUnits(function(data){
                if(data){
                    self.units = data;
                } else {
                    self.units = [ ];
                }
            });

        //self.units = ['a' , 'b'];
        $log.warn('items: ' + JSON.stringify(self.units));
    };

})();
