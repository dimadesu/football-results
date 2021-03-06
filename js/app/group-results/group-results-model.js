(function (angular) {

    'use strict';

    angular.module('app.group-results')
        .factory('GroupResultsModel', function () {

            var model = {};

            model.init = function (data) {

                this.data = data.map(function (group) {

                    var chartData = [];

                    group = group.group;

                    group.teams = group.teams.map(function (team) {

                        team = team.team;

                        // Create flag code
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

                        // Chart data
                        chartData.push({
                            x: team.country,
                            y: [team.points]
                        });

                        return team;

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

            };

            return model;

        });

})(window.angular);
