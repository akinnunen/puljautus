angular.module('vagrantApp').factory('GameModes', function($resource, appConfig) { 
  
  return $resource(appConfig.dataJsonUrl, {}, {
    'query': { 
        method:'GET',
        isArray: true
    }
  });

});