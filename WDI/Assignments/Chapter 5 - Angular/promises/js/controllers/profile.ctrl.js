function ProfileCtrl(api,user) {
    
    this.apiService = api;
    this.user = user;
    console.log(this.user);

    
   
}
ProfileCtrl.prototype.logout = function(){
    this.apiService.logout();
}


angular.module('userApp').controller('ProfileCtrl', ProfileCtrl);