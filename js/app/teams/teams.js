(function (angular) {

    'use strict';

    angular.module('app.teams', [])
    .config(function ($stateProvider) {

        $stateProvider.state('teams', {
            url: '/teams/:code',
            controller: 'TeamsCtrl',
            templateUrl: 'teams.html'
        });

    });

})(window.angular);
