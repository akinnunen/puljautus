'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('vagrantApp'));

  var MainCtrl,
    scope,
    location,
    state;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    location.url('/');
    state = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      state: state
    });
  }));

  it('should attach a list of game modes to the scope', function () {
    expect(scope.gameModes.length).toBe(4);
  });

  it('should set reset current game round', function() {
    expect(state.currentGameRound).toBe(1);
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
