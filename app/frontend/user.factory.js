(function() {
    'use strict';

    angular
        .module('corner')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['$http'];

    /* @ngInject */
    function userFactory($http) {
        var $$ = {
            getMyTeam: getMyTeam
        };
        return $$;

        ////////////////

        function getMyTeam() {
            return $http.get('/api/myteam')
                .then(getMyTeamComplete)
                .catch(getMyTeamFailed);

            function getMyTeamComplete(response) {
                return response.data;
            }

            function getMyTeamFailed(error) {
                console.log('Factory Error: ' + error.data);
            }
        }
    }
})();