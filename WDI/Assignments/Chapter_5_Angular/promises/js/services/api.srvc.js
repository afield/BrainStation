function ApiService($http, $q, $location, $routeParams) {
    this.$http = $http;
    this.$q = $q;
    this.$location = $location;
    this.$routeParams = $routeParams;
}

angular.module('userApp').service('api', ApiService);

var BASE_URL = 'https://mock-login-server.herokuapp.com/api/';
var LOGIN_URL = BASE_URL + 'login';
var LOGOUT_URL = BASE_URL + 'logout';
var PROFILE_URL = BASE_URL + 'user';
var CREATE_ACCOUNT_URL = BASE_URL + 'createAccount';

ApiService.prototype.login = function(username, password) {
    var ctrl = this;
    return this.$http.post(LOGIN_URL, {username: username, password: password})
  .then(function(response) {

    localStorage.authToken = response.data.authToken;
    ctrl.$location.path('/profile');
    
  });
};

/*TODO #5: 
  add a logout() function that sends a POST to
  https://mock-login-server.herokuapp.com/api/logout
*/

ApiService.prototype.logout = function(){
 var ctrl = this;
    this.$http.post(LOGOUT_URL,{});
    console.log('Logged out');
    ctrl.$location.path('/login');

};

/*TODO #3: 
  add a getProfile() function that sends a GET to
  https://mock-login-server.herokuapp.com/api/user
  
  This function should a return a promise that 
  resolves the user data

*/

ApiService.prototype.getProfile = function(){
    return this.$http.get(PROFILE_URL)
};

/*TODO #1:
  add a createAccount() function that sends POST to
  https://mock-login-server.herokuapp.com/api/createAccount
*/

ApiService.prototype.createAccount = function(username, password) {
    console.log(this.$http);
    return this.$http.post(CREATE_ACCOUNT_URL, {username: username, password: password})
  .then(function(response) {
            console.log("success ");
            console.log(response);

    });


};

