(function (angular) {

    'use strict';

    angular.module('app.team-results')
        .factory('TeamResultsModel', function () {

            var model = {};

            model.init = function (data) {

                this.data = data;

            };

            return model;

        });

})(window.angular);
