(function () {
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
        function SidebarHelper() {
            var elementList = [];
            var listenerList = [];

            var service = {
                getElements: getElements,
                addElement: addElement,
                attachChangeListener: attachChangeListener
            };

            return service;

            ///////////////

            function getElements() {
                return elementList;
            }

            function addElement(name, target, avatar) {

                elementList.push(
                    {
                        name: name,
                        target: target,
                        avatar: avatar,
                    }
                );

                listenerList.forEach(function (listener) {
                    listener();
                });
            }

            function attachChangeListener(listener) {
                listenerList.push(listener);
            }
        }
    }

})();
