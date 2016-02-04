var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
    .when('/home', {
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl as ctrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
    