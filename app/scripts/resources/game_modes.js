angular.module('vagrantApp').factory('GameModes', function($http, appConfig) { 

  var spreadsheetUrl = 'http://spreadsheets.google.com/feeds/worksheets/' + appConfig.googleSpreadsheetKey + '/public/basic?alt=json-in-script&callback=JSON_CALLBACK';
 
  return {

    // Does no fetch worksheet content
    all: function(callback) {
      $http.jsonp(spreadsheetUrl).success(function(data) {
        callback(data);
      }).error(function(data, status, headers, config) {
        callback(null);
      });
    },

    // Fetches single worksheet content
    modeOptions: function(url, callback) {
      $http.jsonp(url).success(function(data) {
        callback(data);
      });
    }
  }

});