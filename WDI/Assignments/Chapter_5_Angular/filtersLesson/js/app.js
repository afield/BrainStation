angular.module('DemoApp', []);

function AppCtrl(){
    var ctrl = this;
  
    ctrl.checkout_total = 24.00;
}


AppCtrl.prototype.addItem = function(){
    var ctrl = this;
    ctrl.checkout_totale += 5;
}