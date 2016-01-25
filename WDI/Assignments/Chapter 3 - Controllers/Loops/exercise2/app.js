 var num = 4;
        //This loop will prvar grab all the numbers from 0 to num;
        for (var i=0; i <num; i++){

        	var pattern = "";

            for (var space = num - i; space > 0; space--)
            {
            		pattern = pattern + " ";
            }
        //This loop represents the amount of times each number in the
            //first for loop will prvar out
            for (var j=0; j < i; j++){

            	pattern = pattern + i + " ";

            }
            console.log(pattern);


        }
        var currentDate = new Date();
        var danielsBirthday = new Date('2015/01/20');
        console.log("Today is " + currentDate.toDateString());
        console.log("Daniels Birthday is January 20th");

        if(currentDate.toDateString() === danielsBirthday.toDateString()){
        	console.log("Today is Daniels Birthday... Happy Birthday Daniel!");
 		}else{
 			console.log("Today is not Daniels Birthday... Happy not yo Birthday Daniel")
 		}


 		function Car(model, year, colour){
 			this.model = model;
 			this.year = year;
 			this.colour = colour;

 		}

 Car.prototype.changeColour = function(colour){
 	this.colour = colour;
 }
var car1 = new Car("BMW", 2016, "Black");

 console.log(car1);
