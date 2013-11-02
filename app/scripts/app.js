'use strict';

angular.module('vagrantApp', ['ngResource'])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      }).when('/score', {
            templateUrl: 'views/score.html',
            controller: 'ScoreCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });

      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

angular.module('vagrantApp').constant('appConfig', {
  optionSelectTimeoutMillis: 1500,     // How long before next question is displayed after answering
  optionSelectTimeMillis: 30000,       // How long the player has time to answer to a question
  maxPointsPerQuestion: 10,
  dataJsonUrl: '/data/gamemodes.json', // Where all data is fetched
  googleSpreadsheetKey: '0Atbg9aXL_oUWdEx5V2lSLUc3M1VGT3MtNnhxUGpqNVE'
});