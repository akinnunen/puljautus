angular.module('vagrantApp')
    .factory('state', function () {
        'use strict';

        var state = {};

        return {
            state: state,
            score: 0
        };
    });