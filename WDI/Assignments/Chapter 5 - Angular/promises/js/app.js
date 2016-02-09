var app = angular.module('userApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl as ctrl'
    })
    .when('/profile', {
      templateUrl: 'partials/profile.html',
      controller: 'ProfileCtrl as ctrl',
      /*TODO #3: Add a "resolve" that loads the user
      profile before the profile page loads. If there
      is an error loading the profile then redirect
      the user to the login page.*/
      resolve: {
//      
            user: function(api, $location){
                return api.getProfile().then(function(response){
                    console.log(response);
                    return response.data;
                }).catch(function(err){
                   $location.path('/login'); 
                });
            }
    }
  });


  $httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        if (localStorage.authToken) {
          config.headers.Authorization = localStorage.authToken;
        }
        return config;
      }
    };
  });
});