angular.module('vagrantApp').factory('GameModes', function($resource) { 
  
  return $resource('/data/names.json', {}, {
    'query': { 
        method:'GET'
    }
  });

});