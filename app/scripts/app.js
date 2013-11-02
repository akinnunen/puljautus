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
  });

angular.module('vagrantApp').constant('appConfig', {
  optionSelectTimeoutMillis: 1500,    // How long before next question is displayed after answering
  optionSelectTimeMillis: 30000,      // How long the player has time to answer to a question
  maxPointsPerQuestion: 10,
  dataJsonUrl: '/data/gamemodes.json' // Where all data is fetched
});