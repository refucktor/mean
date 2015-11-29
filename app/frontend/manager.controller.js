(function () {
    'use strict';

    angular
        .module('corner')
        .controller('ManagerController', ManagerController);

    ManagerController.$inject = ['myTeam', 'player', 'playerFactory'];

    /* @ngInject */
    function ManagerController(myTeam, player, playerFactory) {
        var $$ = this;
        $$.myTeam = myTeam ;
        $$.player = player;

        activate();

        ////////////////

        function activate() {
            $$.getTeamPlayer = getTeamPlayer;
        }

        function getTeamPlayer (playerId) {
            playerFactory
                .getTeamPlayer(playerId)
                .then(getTeamPlayerSuccess);

            function getTeamPlayerSuccess (data) {
                $$.player = data;
            }
        }
    }
})();
