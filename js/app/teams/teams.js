(function (angular) {

    angular.module('app.teams', [])
    .config(function ($stateProvider) {

        $stateProvider.state('teams', {
            url: '/teams',
            controller: 'TeamsCtrl',
            templateUrl: 'teams.html'
        });

    });

})(window.angular);
