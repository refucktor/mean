(function () {
    'use strict';

    angular
        .module('corner')
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
            console.log(retrievedData);
            $$.users = retrievedData;
            //console.log($$.comments);
        }

    }
})();