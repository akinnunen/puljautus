angular.module('vagrantApp').filter("getByMode", function() {
  return function(input, mode) {
    var i, len;
    i = 0;
    len = input.length;
    while (i < len) {
      if (input[i].id === mode) {
        return input[i];
      }
      i++;
    }
    return null;
  };
});
