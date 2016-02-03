function titleCaseFilter(word){
    this.word = word;
       
};
titleCaseFilter.prototype.convertTitleCase = function(){
    this.word.toUpperCase();
};


angular.module('insultApp').filter('titleCaseFilter',titleCaseFilter);