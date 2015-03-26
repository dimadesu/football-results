(function (angular) {

    'use strict';

    angular.module('app.team-results', [])
    .config(function ($stateProvider) {

        $stateProvider.state('team-results', {
            url: '/team-result/:code',
            controller: 'TeamsResultsCtrl',
            templateUrl: 'team-results.html'
        });

    });

})(window.angular);
