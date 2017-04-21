'use strict';

angular.module('myApp.skills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/skills', {
    templateUrl: 'routes/skills/skills.html',
    controller: 'SkillsCtrl'
  });
}])

.controller('SkillsCtrl', [function() {

}]);