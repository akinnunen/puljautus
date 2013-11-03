angular.module('vagrantApp').factory('GameModes', function($http, appConfig) {

  'use strict';

  var spreadsheetUrl = 'http://spreadsheets.google.com/feeds/worksheets/' + appConfig.googleSpreadsheetKey + '/public/basic?alt=json-in-script&callback=JSON_CALLBACK';
 
  return {

    // Does no fetch worksheet content
    all: function() {
      return $http.jsonp(spreadsheetUrl);
    },

    // Fetches single worksheet content
    modeOptions: function(url) {
      return $http.jsonp(url);
    }
  };

});