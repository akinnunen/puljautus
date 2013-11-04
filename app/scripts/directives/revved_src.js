// Simiral to ng-src but always removes the first character, e.g. /images/example.png -> images/example.png
// Otherwise grunt won't update update the src values correctly during build
// See https://github.com/yeoman/grunt-usemin/issues/108 for more info
angular.module('vagrantApp').directive('revvedSrc', function() {

  'use strict';

  function link(scope, element, attrs) {
    element[0].src = attrs.revvedSrc.substring(1);
  }

  return {
    link: link
  };

});