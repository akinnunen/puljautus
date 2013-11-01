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