(function (angular) {

    'use strict';

    angular.module('app', [
        'ui.router',
        'restangular',
        'angularCharts',
        // App modules
        'app.group-results',
        'app.teams',
        'app.team-results'
    ]).config(function ($urlRouterProvider, RestangularProvider) {

        // Handle unmatched url
        $urlRouterProvider.otherwise("/group-results/");

        RestangularProvider.setBaseUrl('http://worldcup.sfg.io');
        RestangularProvider.setFullResponse(true);

    });

})(window.angular);
