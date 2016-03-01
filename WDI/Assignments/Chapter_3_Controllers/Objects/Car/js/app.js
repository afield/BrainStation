/**Pseudocode - IMPORTANT!! - Keep up with the pseudocode guys!
    This program will have a form filled with user input fields - make, model, colour, amount
    When a user submits the form correctly
    All of the user inputs will be collected and saved as variables in a Car Object
    A function will take the user amount input and create that many Car Objects
    These objects will be displayed on a table in the correct sections
    A user will then be able to go back and forth, populating the table based on the user inputs
    
    --Amanda Field -- Jan 21, 2016--
*/

//Global Variables
var make = $('#make');
var model = $('#model');
var colour = $('#colour');
var amount = $('#amount');

//Car Factory Object
function CarFactory(make, model, colour) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.cars = [];
}

//Iterate through car objects based on users amount input
CarFactory.prototype.manufacture = function (num) {
    for (var i = 0; i < num; i++) {
        this.cars.push(new Car(make.val(), model.val(), colour.val()));
    }
}

//Used to display how many objects are created - will iterate through each object and log on console
CarFactory.prototype.showCars = function () {
    for (var i = 0; i < this.cars.length; i++) {
        console.log(this.cars[i]);
    }
}

//Constructor for Car Object
function Car(make, model, colour) {
    this.make = make;
    this.model = model;
    this.colour = colour;
}


//Populate table
function populateTable() {
    //Insert all the values inputted by the user
    $("#car-table").find('tbody')
        //Append to add new element
        .append($('<tr>')
            //td element
            .append($('<td>')
                //text inputs content
                .text(make.val())
            )
            .append($('<td>')
                .text(model.val())
            )
            .append($('<td>')
                .text(colour.val())
            )
            .append($('<td>')
                .text(amount.val())
            )

        );
}

//When Submit is selected
$('#create-form').submit(function (event) {
    event.preventDefault();

    //If the user input is a number (not - not a number)
    if (!(isNaN(amount.val()))) {
        
        //create new Factory object
        factory = new CarFactory(this.make, this.model, this.colour);
        
        //Pass amount in through manufacture function
        factory.manufacture(amount.val());
        
        //Populate the table based on values user had inputted
        populateTable();
        
        //change css properties
        $('#create-container').css('display', 'none');
        $('#view-container').css('display', 'block');
       
        //log car objects created in the console 
        factory.showCars();

        //When the back button is selected
        $('#back-button').click(function () {
            //show create container
            $('#create-container').css('display', 'block');
            //hide display container
            $('#view-container').css('display', 'none');
        });
        
        //call my new clearInputs function
        clearInputs();

    } else {
        //Error handling - If amount user input is NaN
        alert("Please enter a numeric value in the amount field");
    }
});


/*SIDE NOTE -- Suzanne added an idea to erase the data every time
you click back in the creat form */ 
//This would simply require a quick function that we will call after
//we click submit

/*Copied and pasted this from the first result of googling
"jQuery erase form data" - just changed the values and VOILA*/
function clearInputs(){
    $("#make").val('');
    $("#model").val('');
    $("#colour").val('');
    $("#amount").val('');
    //:)
}