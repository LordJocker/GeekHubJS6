'use strict';

angular.module('myApp.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'routes/portfolio/portfolio.html',
    controller: 'PortfolioCtrl'
  });
}])

.controller('PortfolioCtrl', [function() {

}]);