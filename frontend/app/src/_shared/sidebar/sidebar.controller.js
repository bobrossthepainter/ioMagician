(function() {
    'use strict';

    angular
        .module('sidebar')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$mdSidenav', '$mdBottomSheet', '$log', '$q', '$location'];


    function SidebarController($mdSidenav, $mdBottomSheet, $log, $q, $location) {
        /* jshint validthis: true */
        var vm = this;

        vm.title = "Navi";
        vm.selected = null;
        vm.items = [{
            "name": "Aktionen",
            "target": "execution",
            "avatar" : "svg-2"
        }, {
            "name": "Controlable Units",
            "target": "unit.list",
            "avatar" : "svg-1"
        }];

        vm.selectItem = selectItem;
        vm.toggleList = toggleItemList;
        vm.showContactOptions = showContactOptions;

        activate();


        //////////


        function activate(){

        }


        // *********************************
        // Internal methods
        // *********************************

        /**
         * First hide the bottomsheet IF visible, then
         * hide or Show the 'left' sideNav area
         */
        function toggleItemList() {
            var pending = $mdBottomSheet.hide() || $q.when(true);

            pending.then(function () {
                $mdSidenav('left').toggle();
            });
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function selectItem(item) {
            vm.selected = angular.isNumber(item) ? $scope.items[item] : item;
            vm.toggleList();
            $location.path(item.target);
        }

        /**
         * Show the bottom sheet
         */
        function showContactOptions($event) {
            var user = vm.selected;

            return $mdBottomSheet.show({
                parent: angular.element(document.getElementById('content')),
                templateUrl: './src/users/view/contactSheet.html',
                controller: ['$mdBottomSheet', ContactPanelController],
                controllerAs: "cp",
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && $log.debug(clickedItem.name + ' clicked!');
            });

            /**
             * Bottom Sheet controller for the Avatar Actions
             */
            function ContactPanelController($mdBottomSheet) {
                this.user = user;
                this.actions = [
                    {name: 'Phone', icon: 'phone', icon_url: 'assets/img/svg/phone.svg'},
                    {name: 'Twitter', icon: 'twitter', icon_url: 'assets/img/svg/twitter.svg'},
                    {name: 'Google+', icon: 'google_plus', icon_url: 'assets/img/svg/google_plus.svg'},
                    {name: 'Hangout', icon: 'hangouts', icon_url: 'assets/img/svg/hangouts.svg'}
                ];
                this.submitContact = function (action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }

    }

})();
