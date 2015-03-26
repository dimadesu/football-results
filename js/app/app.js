(function (angular) {

    'use strict';

    angular.module('app', [
        'ui.router',
        'restangular',
        'angularCharts',
        'ui.bootstrap',
        // App modules
        'app.alerts',
        'app.group-results',
        'app.teams',
        'app.team-results'
    ]).config(function ($urlRouterProvider, RestangularProvider, $provide, $httpProvider) {

        // Handle unmatched url
        $urlRouterProvider.otherwise("/group-results/");

        RestangularProvider.setBaseUrl('http://worldcup.sfg.io');
        RestangularProvider.setFullResponse(true);

        $provide.factory('httpInterceptor', function ($q) {
            var interceptor = {
                response: function (response) {
                    return response || $q.when(response);
                },
                responseError: function (rejection) {
                    interceptor.errors.push('Cannot load ' + rejection.config.url);
                    return $q.reject(rejection);
                },
                errors: []
            };
            return interceptor;
        });

        $httpProvider.interceptors.push('httpInterceptor');

    });

})(window.angular);
