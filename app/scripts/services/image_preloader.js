angular.module('vagrantApp').factory('imagePreloader', function($log) {
    
  'use strict';

  var preloader = {

    preloadForAllModes: function(modes) {
      angular.forEach(modes, function(mode) {
        angular.forEach(mode.options, function(option) {
          var img = new Image();
          img.src = option.imgSrc;
        });
      });
    }
  };

  return preloader;

});