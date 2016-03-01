var app = angular.module('todoApp', []);

function TodoCtrl() {
  this.todos = [
    {text: 'learn angular', done: false},
    {text: 'write the content for the next module', done: false},
    {text: 'buy cheese', done: true}
  ];
  
  this.filters = [
    {label: 'All', showTodo: function(todo) {return true;}},
    {label: 'Active', showTodo: function(todo) {return !todo.done;}},
    {label: 'Complete', showTodo: function(todo) {return todo.done;}}
  ]
  this.selectedFilter = this.filters[0];
    
}


TodoCtrl.prototype.checkTodos = function(){
    for(var i=0; i<this.todos.length; i++){
        if(this.todos[i].done == true){
         //   return false;
            return false;
        }
    }return true;
}

this.newTodo = "";     
TodoCtrl.prototype.addTodo = function(){
    this.todos.push({text: this.newTodo, done:false});
console.log("todo added")

}


TodoCtrl.prototype.clearTodos = function(){
    for(var i=0; i < this.todos.length; i++){
        if(this.todos[i].done){
        
            console.log(this.todos[i].text + " deleted");
            this.todos.splice(i,1);            
            //If using splice you have to go back an index because when using splice, the length of the array changes
            i--;
        }

    }
}

app.controller('TodoCtrl', TodoCtrl);

