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
  beforeEach(inject(function ($controller, $rootScope, $location, $httpBackend, appConfig) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    location = $location;
    location.url('/');
    state = {
      currentGameRound: appConfig.gameRounds,
      score: 1234
    };
    
    var modesJson = { 
      feed: { 
        entry: [
          {
            content: {
              $t: 'names',
            },
            link: [
              {}, { href: 'worksheets' }
            ]
          },
          {
            content: {
              $t: 'titles',
            },
            link: [
              {}, { href: 'worksheets' }
            ]
          }
        ]
      }
    }

    var optionsJson = { 
      feed: { 
        entry: [
          {
            title: {
              $t: 'A1'
            },
            content: {
              $t: 'label'
            }
          }, {
            title: {
              $t: 'B1'
            },
            content: {
              $t: 'imgUrl'
            }
          }, {
            title: {
              $t: 'A2'
            },
            content: {
              $t: 'makki karvalakki'
            }
          }, {
            title: {
              $t: 'B2'
            },
            content: {
              $t: 'http://www.example.com/makki.png'
            }
          }
        ]
      }
    }

    $httpBackend.expectJSONP(/.*spreadsheets.*/)
    $httpBackend.expectJSONP(/.*worksheets.*/)
    $httpBackend.whenJSONP(/.*spreadsheets.*/).respond(JSON.stringify(modesJson));
    $httpBackend.whenJSONP(/.*worksheets.*/).respond(JSON.stringify(optionsJson));

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      state: state
    });
  }));

  it('should attach a list of game modes to the scope', function () {
    httpBackend.flush();
    expect(scope.gameModes.length).toBe(2);
  });

  it('should set reset current game round', function() {
    expect(state.currentGameRound).toBe(0);
  });

  it('should set game rounds', function() {
    expect(state.gameRounds).toBe(20);
  });

  it('should reset score', function() {
    expect(state.score).toBe(0);
  });

  it('should change location to game when enabled mode is selected', function() {
    scope.play({enabled: true});
    expect(location.url()).toBe('/game');
  });

});