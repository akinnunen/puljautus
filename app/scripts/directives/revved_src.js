// Solves https://github.com/yeoman/grunt-usemin/issues/108
angular.module('vagrantApp').directive('revvedSrc', function() {

  'use strict';

  function link(scope, element, attrs) {
    element[0].src = attrs.revvedSrc.substring(1);
  }

  return {
    link: link
  };

});