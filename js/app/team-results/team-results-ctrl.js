(function (angular) {

    angular.module('app.team-results')
    .controller('TeamsResultsCtrl', function ($scope, $http, $stateParams) {

        $http.get('http://worldcup.sfg.io/teams/results')
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

    });

})(window.angular);
