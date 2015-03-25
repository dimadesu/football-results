(function (angular) {

    angular.module('app.teams')
    .controller('TeamsCtrl', function ($scope, $http) {

        $http.get('http://worldcup.sfg.io/teams/')
        .then(function (resp) {
            $scope.teams = resp.data;
        }, function (error) {
            console.error(error);
        });

    });

})(window.angular);
