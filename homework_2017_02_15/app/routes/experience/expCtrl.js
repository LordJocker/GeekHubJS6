'use strict';

angular.module('myApp.experience', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/experience', {
    templateUrl: 'routes/experience/exp.html',
    controller: 'ExpCtrl'
  });
}])

.controller('ExpCtrl', [function() {

}]);