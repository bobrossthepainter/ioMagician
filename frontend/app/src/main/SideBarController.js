(function () {

    angular
        .module('sidebar')
        .controller('SideBarController', [
            '$mdSidenav', '$mdBottomSheet', '$log', '$q',
            SideBarController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function SideBarController($mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.title = "Navi";
        self.selected = null;
        self.items = [{
            "name": "Controlable Units",
            "target": "todo",
            "avatar" : "svg-1"
        }, {
            "name": "Port Aggregation",
            "target": "todo",
            "avatar" : "svg-2"
        }];

        self.selectItem = selectItem;
        self.toggleList = toggleItemList;
        self.showContactOptions = showContactOptions;


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
            self.selected = angular.isNumber(item) ? $scope.items[item] : item;
            self.toggleList();
        }

        /**
         * Show the bottom sheet
         */
        function showContactOptions($event) {
            var user = self.selected;

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
                    {name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg'},
                    {name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg'},
                    {name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg'},
                    {name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg'}
                ];
                this.submitContact = function (action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }

    }

})();
