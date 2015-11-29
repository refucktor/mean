(function () {
    'use strict';

    angular
        .module('corner')
        .controller('ProfileController', ProfileController)
        .controller('ManagerController', ManagerController);

    function ManagerController (cw_services) {
        var $$ = this;

        activate();

        function activate() {
            $$.getUsers = getUsers;
            getUsers();
        }

        function getUsers () {
            cw_services
                .getUsers()
                .then(onGetUsersSuccess);
        }
        function onGetUsersSuccess (retrievedData) {
            console.log(retrievedData);
            $$.users = retrievedData;
            //console.log($$.comments);
        }

    }

    function ProfileController () {

    }
})();