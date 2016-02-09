function LoginCtrl(api) {
    this.apiService = api;
    this.username = "";
    this.password = "";
    
}

LoginCtrl.prototype.login = function(){
    this.apiService.login(this.username, this.password);
}

LoginCtrl.prototype.createAccount = function(){
    this.apiService.createAccount(this.username, this.password);
}
angular.module('userApp').controller('LoginCtrl', LoginCtrl);