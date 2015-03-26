(function (angular) {

    'use strict';

    angular.module('app.teams')
        .factory('TeamsModel', function () {

            var model = {};

            model.init = function (data) {

                this.data = data;

            };

            return model;

        });

})(window.angular);
