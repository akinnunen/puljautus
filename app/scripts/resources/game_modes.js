angular.module('vagrantApp').factory('GameModes', function($http, appConfig) { 

  var spreadsheetUrl = 'http://spreadsheets.google.com/feeds/worksheets/' + appConfig.googleSpreadsheetKey + '/public/basic?alt=json-in-script&callback=JSON_CALLBACK';
 
  return {

    // Does no fetch worksheet content
    all: function(callback) {
      return $http.jsonp(spreadsheetUrl);
    },

    // Fetches single worksheet content
    modeOptions: function(url, callback) {
      return $http.jsonp(url);
    }
  }

});