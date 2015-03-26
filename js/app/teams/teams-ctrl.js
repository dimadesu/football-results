(function (angular) {

    'use strict';

    angular.module('app.teams')
        .controller('TeamsCtrl', function ($scope, Restangular, $stateParams) {

            Restangular.all('teams').getList()
                .then(function (resp) {
                    if ($stateParams.code) {
                        $scope.teams = resp.data.filter(function (item) {
                            return $stateParams.code === item.fifa_code;
                        });
                    } else {
                        $scope.teams = resp.data;
                    }
                }, function (error) {
                    console.error(error);
                });

        });

})(window.angular);
