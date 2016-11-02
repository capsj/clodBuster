/**
 * Created by nicolas on 02/11/16.
 */
'use strict';

/* Filters */

angular.module('myApp.filters', []).
filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  }
}]);
