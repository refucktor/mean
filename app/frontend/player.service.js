(function() {
    'use strict';

    angular
        .module('corner')
        .factory('playerFactory', playerFactory);

    playerFactory.$inject = ['$http'];

    /* @ngInject */
    function playerFactory($http) {
        var $$ = {
            getLocalPlayer: getLocalPlayer
        };
        return $$;

        ////////////////

        function getLocalPlayer(playerId) {
            return $http.get('/api/player/' + playerId)
                .then(getLocalPlayerComplete)
                .catch(getLocalPlayerFailed);

            function getLocalPlayerComplete(response) {
                return response.data.results;
            }

            function getLocalPlayerFailed(error) {
                console.log('Factory Error: ' + error.data);
            }
        }
    }
})();