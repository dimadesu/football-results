(function (angular) {

    'use strict';

    angular.module('app.teams')
        .controller('TeamsCtrl', ['$scope', 'Restangular', '$stateParams', 'TeamsModel', '$q',
            function ($scope, Restangular, $stateParams, TeamsModel, $q) {

                var deferred = $q.defer();

                if (TeamsModel.data === undefined) {
                    Restangular.all('teams').getList()
                        .then(function (resp) {
                            TeamsModel.init(resp.data);
                            deferred.resolve();
                        });
                } else {
                    deferred.resolve();
                }

                deferred.promise.then(function(){
                    if ($stateParams.code) {
                        $scope.teams = TeamsModel.data.filter(function (item) {
                            return $stateParams.code === item.fifa_code;
                        });
                    } else {
                        $scope.teams = TeamsModel.data;
                    }
                });

                $scope.isLinkDisplayed = function () {
                    return $stateParams.code === '';
                };

            }
        ]);

})(window.angular);
