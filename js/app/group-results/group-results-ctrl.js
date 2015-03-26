(function(angular){

    'use strict';

    angular.module('app.group-results')
        .controller('GroupResultsCtrl', ['$scope', 'Restangular', '$stateParams', 'GroupResultsModel', '$q',
            function ($scope, Restangular, $stateParams, GroupResultsModel, $q) {

                var deferred = $q.defer();

                if (GroupResultsModel.data === undefined) {
                    Restangular.all('teams').all('group_results').getList()
                        .then(function (resp) {

                            GroupResultsModel.init(resp.data);

                            deferred.resolve();

                        });
                } else {
                    deferred.resolve();
                }

                deferred.promise.then(function(){

                    if ($stateParams.groupId) {
                        $scope.groups = GroupResultsModel.data.filter(function (item) {
                            return parseInt($stateParams.groupId, 10) === item.id;
                        });
                    } else {
                        $scope.groups = GroupResultsModel.data;
                    }

                });

                $scope.isLinkDisplayed = function () {
                    return $stateParams.groupId === '';
                };

            }
        ]);

})(window.angular);
