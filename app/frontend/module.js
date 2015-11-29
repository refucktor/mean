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
                controllerAs:"mc"
            })
            .otherwise({ redirectTo: '/profile' });
    }
})();