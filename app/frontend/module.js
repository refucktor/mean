(function () {
    'use strict';

    angular
        .module('cuba.weekly', [
            'ngRoute'
        ])
        .config(config);

    function config ($routeProvider) {
        $routeProvider
            .when('/users', {templateUrl: 'frontend_views/test.html', controller: 'CWController', controllerAs:"cw"})
            .otherwise({ redirectTo: '/' });
    }
})();