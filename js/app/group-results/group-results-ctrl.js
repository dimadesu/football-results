
    angular.module('app.group-results')
    .controller('GroupResultsCtrl', function ($scope, $http) {

        $http.get('http://worldcup.sfg.io/teams/group_results')
        .then(function (resp) {
            // Data format simplification
            $scope.groups = resp.data.map(function (group) {
                group = group.group;
                group.teams = group.teams.map(function (team) {
                    team = team.team;
                    team.flag_code = team.fifa_code.slice(0,2).toLowerCase();
                    // Fix for some flags
                    switch (team.flag_code) {
                        case 'ge':
                            team.flag_code = 'de';
                            break;
                        case 'en':
                            team.flag_code = 'england';
                            break;
                        case 'po':
                            team.flag_code = 'pt';
                            break;
                        case 'ko':
                            team.flag_code = 'kr';
                            break;
                        case 'ur':
                            team.flag_code = 'uy';
                            break;
                        case 'su':
                            team.flag_code = 'ch';
                            break;
                        case 'ho':
                            team.flag_code = 'hn';
                            break;
                        case 'ch':
                            team.flag_code = 'cl';
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

