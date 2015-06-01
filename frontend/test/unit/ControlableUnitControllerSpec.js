'use strict';

/* jasmine specs for controllers go here */
describe('ControlableUnit', function () {

    describe('controller', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(module('controlableUnits'));

        //Getting reference of the mocked service
        var mockcontrolableUnitService;

        //Getting reference of the mocked service
        beforeEach(inject(function (controlableUnitService, $rootScope, $controller) {
            mockcontrolableUnitService = controlableUnitService;

            scope = $rootScope.$new();
            ctrl = $controller('ControlableUnitController', {$scope: scope});
        }));

        beforeEach(module(function ($provide) {
            $provide.service('controlableUnitService', function () {
                this.loadAllControlableUnits = jasmine.createSpy('loadAllControlableUnits').andCallFake(function (cb) {
                    cb([{"it is": "not"}, {"completely": "working"}]);
                });
            });
        }));


        it('should create "units" model with 2 units', function () {
            expect(scope.units).toEqual([{"it is": "not"}, {"completely": "working"}]);
        });
    });


});
