(function (angular) {

    'use strict';

    angular.module('app.team-results')
        .controller('TeamsResultsCtrl', ['$scope', 'Restangular', '$stateParams', function ($scope, Restangular, $stateParams) {

            Restangular.all('teams').all('results').getList()
                .then(function (resp) {
                    if ($stateParams.code) {
                        $scope.teamResults = resp.data.filter(function (item) {
                            return $stateParams.code === item.fifa_code;
                        });
                    } else {
                        $scope.teamResults = resp.data;
                    }
                }, function (error) {
                    console.error(error);
                });

        }]);

})(window.angular);
