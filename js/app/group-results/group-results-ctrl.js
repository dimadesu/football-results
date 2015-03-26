(function(angular){

    'use strict';

    angular.module('app.group-results')
        .controller('GroupResultsCtrl', ['$scope', 'Restangular', '$stateParams', function ($scope, Restangular, $stateParams) {

            Restangular.all('teams').all('group_results').getList()
                .then(function (resp) {

                    var data = resp.data;

                    // Data format simplification
                    data = data.map(function (group) {
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

                    data = data.map(function(group){
                        var chartData = [];

                        group.teams.forEach(function(team){
                            chartData.push({
                                x: team.country,
                                y: [team.points]
                            });
                        });

                        group.chart = {
                            type: 'pie',
                            data: {
                                data: chartData
                            },
                            config: {
                                tooltips: false,
                                labels: true, // labels on data points
                                legend: {
                                    display: true,
                                    position: 'right',// can be either 'left' or 'right'.
                                    htmlEnabled: true
                                },
                                innerRadius: 50, // Only on pie Charts
                                lineCurveType: 'cardinal', // change this as per d3 guidelines to avoid smoothline
                                isAnimate: true, // run animations while rendering chart
                                yAxisTickFormat: 's', //refer tickFormats in d3 to edit this value
                                waitForHeightAndWidth: false
                            }
                        };

                        return group;
                    });

                    if ($stateParams.groupId) {
                        $scope.groups = data.filter(function (item) {
                            return parseInt($stateParams.groupId, 10) === item.id;
                        });
                    } else {
                        $scope.groups = data;
                    }

                }, function (error) {
                    console.error(error);
                });

        }]);

})(window.angular);
