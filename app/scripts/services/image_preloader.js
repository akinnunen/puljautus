angular.module('vagrantApp').factory('imagePreloader', function() {
    
  'use strict';

  var preloader = {

    preloadForAllModes: function(modes) {
      angular.forEach(modes, function(mode) {
        angular.forEach(mode.options, function(option) {
          var img = new Image();
          img.src = option.imgUrl;
        });
      });
    }
  };

  return preloader;

});