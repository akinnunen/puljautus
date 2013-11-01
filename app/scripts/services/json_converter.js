angular.module('vagrantApp').factory('jsonConverter', function(GameModes) {

    'use strict';
    
    var converter = {

        convert: function(json) {
            return json;
        }
    };

    return converter;
    
});