angular.module('vagrantApp').factory('GameModes', function($resource) { 
  
  return $resource('/data/gamemodes.json', {}, {
    'query': { 
        method:'GET'
    }
  });

});