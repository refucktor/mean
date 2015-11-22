(function () {
    'use strict';

    angular
        .module('cuba.weekly')
        .controller('CWController', CWController);

    function CWController (cw_services) {
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
            $$.users = retrievedData[0].username;
            //console.log($$.comments);
        }

    }
})();