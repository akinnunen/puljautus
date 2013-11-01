'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('vagrantApp'));

  var MainCtrl,
    scope,
    location,
    state,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location, $httpBackend) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    location = $location;
    location.url('/');
    state = {};
    
    var gameModes = [
      {
        "id":"names",
        "name":"Nimet",
        "enabled":true,
        "options": []
      },
      {
        "id":"names",
        "name":"Nimet",
        "enabled":true,
        "options": []
      }
    ];

    $httpBackend.when('GET', '/data/gamemodes.json').respond(gameModes);

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      state: state
    });
  }));

  it('should attach a list of game modes to the scope', function () {
    httpBackend.flush();
    expect(scope.gameModes.length).toBe(2)
  });

  it('should set reset current game round', function() {
    expect(state.currentGameRound).toBe(0);
  });

  it('should set game rounds', function() {
    expect(state.gameRounds).toBe(4);
  });

  it('should change location to game when enabled mode is selected', function() {
    scope.play({enabled: true});
    expect(location.url()).toBe('/game');
  });

  it('should not change location to game when disabled mode is selected', function() {
    scope.play({enabled: false});
    expect(location.url()).toBe('/');
  });
});
