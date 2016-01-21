
    var make = $('#make');
    var model = $('#model');
    var colour = $('#colour');
    var amount = $('#amount');

function CarFactory(make,model,colour){
	this.make = make;
	this.model = model;
	this.colour = colour;
	this.cars = [];
}

CarFactory.prototype.manufacture = function(num){
	for(var i = 0; i < num; i++){
		
		this.cars.push(new Car(this.make,this.model,this.colour));
	}
}

CarFactory.prototype.showCars = function(){
	for(var i = 0; i < this.cars.length; i++){
		console.log(this.cars[i]);
	}
}
function Car(make,model,colour){
	this.make = make;
	this.model = model;
	this.colour = colour;
}


    //Populate table
function populateTable(){

    $("#car-table").find('tbody')
    .append($('<tr>')
        .append($('<td>')
                .text(make.val())      
        ).append($('<td>')
                .text(model.val())
        ).append($('<td>')
                .text(colour.val())
        ).append($('<td>')
                .text(amount.val())
        )
            
    );
}

$('#create-form').submit(function(event){
    event.preventDefault();
    factory = new CarFactory(this.make,this.model,this.colour);
    factory.manufacture(amount.val());     
    populateTable();
    console.log(factory.cars.length);
    

});

