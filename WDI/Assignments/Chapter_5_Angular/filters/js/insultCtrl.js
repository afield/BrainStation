function InsultCtrl() {
    this.insultService = new InsultService();
    this.insult = this.insultService.insult;
}
InsultCtrl.prototype.replaceInsult = function(){
        this.insult = this.insultService.generateInsult();
}

angular.module('insultApp').controller('InsultCtrl', InsultCtrl);