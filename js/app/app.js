(function (angular) {

    'use strict';

    angular.module('app', [
        'ui.router',
        'angularCharts',
        // App modules
        'app.group-results',
        'app.teams',
        'app.team-results'
    ]).config(function ($urlRouterProvider) {
        // Handle unmatched url
        $urlRouterProvider.otherwise("/group-results/");
    });

})(window.angular);
