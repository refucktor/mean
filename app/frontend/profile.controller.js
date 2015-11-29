(function() {
    'use strict';

    angular
        .module('corner')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['userFactory'];

    /* @ngInject */
    function ProfileController(userFactory) {
        var vm = this;
        vm.title = 'ProfileController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();