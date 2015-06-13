'use strict';

/* jasmine specs for controllers go here */
describe('ControlableUnit', function () {

    describe('controller', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(module('controlableUnits'));

        //Getting reference of the mocked service
        var mockcontrolableUnitService;

        beforeEach(module(function ($provide) {
            $provide.service('controlableUnitService', function () {
                this.loadAllControlableUnits = jasmine.createSpy('loadAllControlableUnits').andCallFake(function (cb) {
                    cb([{"it is": "not"}, {"completely": "working"}]);
                });
            });
        }));

        //Getting reference of the mocked service
        beforeEach(inject(function (controlableUnitService, $controller) {
            mockcontrolableUnitService = controlableUnitService;

            ctrl = $controller('ControlableUnitController');
        }));




        it('should create "units" model with 2 units', function () {
            expect(ctrl.units).toEqual([{"it is": "not"}, {"completely": "working"}]);
        });
        it('should return yolo', function () {
            expect(ctrl.lala).toEqual("yolo");
        });
    });


});
