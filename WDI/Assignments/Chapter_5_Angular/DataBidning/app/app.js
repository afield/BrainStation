//You do not need to change anything is this file

//declaring our module , called in your index file you use ng-app="MyApp"
var app = angular.module('MyApp',[]);

//the controller
function MyController() {
    //variables
    this.greeting = "Well, hello ";
    this.textBox;
    this.boolean = true;
    this.num1 = 10;
    this.num2 = 30;
    this.peopleArray=[
        {
            name:"Jimmy",
            age:14,
            job:"Space Man"
        },
        {
            name:"Johnny",
            age:16,
            job:"Taxidermist"
        },
        {
            name:"Jane",
            age:15,
            job:"Underwater Welder"
        },
         {
            name:"Lucy",
            age:12,
            job:"Dog Hotel Owner"
        }
    ]
}

//prototype function 
MyController.prototype.click = function() {
    if(this.textBox){
        alert(this.textBox+ " is what's in the textbox!")
    }
    else{
        alert("Your text box is empty!")
    }
};

//declaring our first controller, MyController, in index you use ng-controller = "MyController"
app.controller("MyController", MyController);

