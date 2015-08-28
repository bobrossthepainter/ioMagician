angular
    .module('ioMagician.common')
    .directive('iomAction', iomAction)

.$inject = [''];

/* @ngInject */
function iomAction () {


    return {
        restrict: 'E',
        scope :{
            action : '=',
        },
        templateUrl: 'src/_shared/directives/iomActionDirectiveView.html',
    };



}
