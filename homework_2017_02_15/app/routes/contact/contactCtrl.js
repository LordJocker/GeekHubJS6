'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'routes/contact/contact.html',
    controller: 'ContactCtrl'
  });
  $routeProvider.when('', function(){
    
  })
}])

.controller('ContactCtrl', function($scope, $http) {
  $scope.userData = {};
  $scope.submitForm = function() {
    if ($scope.form.$valid) {
      $http({
            method: 'POST',
            url: '/send',
            data: {
                form: $scope.userData
            }
        }).then(function success(res) {
    	    alert('Message sent');
        }, function error(res) {
          alert('something went wrong...')
        });
    }
  };
});