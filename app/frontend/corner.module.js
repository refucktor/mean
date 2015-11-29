(function () {
    'use strict';

    angular
        .module('corner', [
            'ngRoute'
        ])
        .config(config);

    function config ($routeProvider) {
        $routeProvider
            .when('/profile', {
                templateUrl: 'frontend_views/profile.html',
                controller: 'ProfileController',
                controllerAs:"pc"
            })
            .when('/manager', {
                templateUrl: 'frontend_views/manager.html',
                controller: 'ManagerController',
                controllerAs:"mc",
                resolve: {
                    myTeam: myTeam,
                    player: function(){ return {}; }
                }
            })
            .when('/manager/:playerid', {
                templateUrl: 'frontend_views/player.html',
                controller: 'ManagerController',
                controllerAs:"mc",
                resolve: {
                    myTeam: function(){ return {}; },
                    player: player
                }
            })
            .otherwise({ redirectTo: '/profile' });
    }

    myTeam.$inject = ['userFactory'];
    /* @ngInject */
    function myTeam (userFactory) {
        return userFactory.getMyTeam();
    }

    player.$inject = ['playerFactory', '$route'];
    /* @ngInject */
    function player (playerFactory, $route) {
        var playerId = $route.current.params.playerid;
        return playerFactory.getTeamPlayer(playerId);
    }
})();