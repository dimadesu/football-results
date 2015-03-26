(function (angular) {

    angular.module('app.group-results', [])
    .config(function ($stateProvider) {

        $stateProvider.state('group-results', {
            url: '/group-results/:groupId',
            controller: 'GroupResultsCtrl',
            templateUrl: 'group-results.html'
        });

    });

})(window.angular);
