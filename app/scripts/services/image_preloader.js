angular.module('vagrantApp').factory('imagePreloader', function($log) {
    
  'use strict';

  var preloader = {

    preloadAll: function(srcs) {
      angular.each(srcs, function(each) {
        var img = new Image();
        img.src = each;
      });

    }
  };

  return preloader;

});