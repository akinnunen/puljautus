angular.module('vagrantApp').factory('jsonConverter', function(GameModes) {

    'use strict';
   
    var converter = {

        convert: function(json) {
            return json;
        },

        getGameModeNamesAndUrls: function(json) {
            var data = [];
            angular.forEach(json.feed.entry, function(each) {
                var name = each.content.$t
                var url = each.link[1].href;
                data.push({ name: name, url: url + '?alt=json-in-script&callback=JSON_CALLBACK' })
            });
            
            return data;
        },

        getModeOptions: function(json) {
            
            var options = [];
            var columnDataTypes = []

            angular.forEach(json.feed.entry, function(each) {

                var rowNumber = parseInt(each.title.$t.replace(/\w/, ''));
                var columnLetter = each.title.$t.replace(/\d+/, '');
                var value = each.content.$t;

                // Collect data types from the first row
                if (rowNumber == 1) {
                    columnDataTypes.push(columnLetter)
                    columnDataTypes.push(value)
                    return;
                }

                // Get current value data type from the previously collected values
                var dataType = columnDataTypes[columnDataTypes.indexOf(columnLetter) + 1]

                // Make sure object exists for this row
                if (options.length < rowNumber - 1) {
                    options.push({});
                }

                options[(rowNumber - 2)][dataType] = value

            });

            return options;
        }
    };

    return converter;
    
});