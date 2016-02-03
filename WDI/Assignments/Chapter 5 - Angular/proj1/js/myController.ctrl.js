function MyController($scope){
    var ctrl = this;
    
    ctrl.name;
    ctrl.hide_show = true;
    ctrl.friends = ['Mike','John'];
}

MyController.prototype.greeting = function(){
    var ctrl = this;
    
    alert('Hello ' + ctrl.name)
    
}

MyController.prototype.addFriend = function(){
    var ctrl = this;
    
    ctrl.friends.push(ctrl.name);
}

app.controller('MyController', MyController);