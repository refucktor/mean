(function () {
    'use strict';

    angular
        .module('cuba.weekly')
        .factory('cw_services', cw_services);

    function cw_services($http){
        var $$ = this;

        $$.$$ = {
            getUsers : getUsers
        };
        return $$.$$;

        function getUsers() {
            return $http
                .get('/api/users')
                .then(function(response){
                    return response.data;
                });
        }
    }
    /*function commentsService ($http) {
        var $$ = this;

        $$.$$ = {
            getComments : getComments,
            getCommentsById : getCommentsById
        };
        return $$.$$;

        function getComments () {
            return $http
                .get('/api/comments')
                .then(function (response) {
                    console.log(response.data[0]);
                    return response.data[0];
                });
        }

        function getCommentsById () {}

    }*/
})();