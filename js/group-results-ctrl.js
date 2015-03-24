(function () {

    angular.module('app')
    .controller('GroupResultsCtrl', function ($scope, $http) {

        $http.get('http://worldcup.sfg.io/teams/group_results')
        .then(function (resp) {
            // Data format simplification
            $scope.groups = resp.data.map(function (group) {
                group = group.group;
                group.teams = group.teams.map(function (team) {
                    team = team.team;
                    team.fifa_code = team.fifa_code.slice(0,2).toLowerCase();
                    // Fix for some flags
                    switch (team.fifa_code) {
                        case 'ge':
                            team.fifa_code = 'de';
                            break;
                        case 'en':
                            team.fifa_code = 'england';
                            break;
                        case 'po':
                            team.fifa_code = 'pt';
                            break;
                        case 'ko':
                            team.fifa_code = 'kr';
                            break;
                        case 'ur':
                            team.fifa_code = 'uy';
                            break;
                        case 'su':
                            team.fifa_code = 'ch';
                            break;
                        case 'ho':
                            team.fifa_code = 'hn';
                            break;
                        case 'ch':
                            team.fifa_code = 'cl';
                            break;
                    }
                    return team;
                });
                return group;
            });
        }, function (error) {
            console.error(error);
        });

    });

})();
