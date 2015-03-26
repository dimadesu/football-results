(function (angular) {

    angular.module('app', ['ui.router', 'app.group-results', 'app.teams', 'app.team-results'])
        .config(function ($urlRouterProvider) {
            // Handle unmatched url
            $urlRouterProvider.otherwise("/group-results");
        });

})(window.angular);
