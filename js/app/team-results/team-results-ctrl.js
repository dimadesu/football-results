(function (angular) {

    'use strict';

    angular.module('app.team-results')
        .controller('TeamsResultsCtrl', ['$scope', 'Restangular', '$stateParams', 'TeamResultsModel', '$q',
            function ($scope, Restangular, $stateParams, TeamResultsModel, $q) {

                var deferred = $q.defer();

                if (TeamResultsModel.data === undefined) {
                    Restangular.all('teams').all('results').getList()
                        .then(function (resp) {
                            TeamResultsModel.init(resp.data);
                            deferred.resolve();
                        });
                } else {
                    deferred.resolve();
                }

                deferred.promise.then(function(){
                    if ($stateParams.code) {
                        $scope.teamResults = TeamResultsModel.data.filter(function (item) {
                            return $stateParams.code === item.fifa_code;
                        });
                    } else {
                        $scope.teamResults = TeamResultsModel.data;
                    }
                });

                $scope.isLinkDisplayed = function () {
                    return $stateParams.code === '';
                };

            }
        ]);

})(window.angular);
