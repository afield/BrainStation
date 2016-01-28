$(document).ready(function(){
//EVENT LISTENERS
   
    //Employees Click
    $('#create-form').submit(function(e){
        e.preventDefault();
        //variable to grab the form 
        var cform = $('#create-form');        
        var vtable = $('#view-table'); 

    //Locate and initialize variables
        var first = cform.find('input[id="first-name"]').val();
        var last = cform.find('input[id="last-name"]').val();
        var dateString = cform.find('input[id="dob"]').val();
            console.log(dateString);
        var position = cform.find('input[id="position"]').val();
        var wage = cform.find('input[id="wage"]').val();
        
        //error handling for wage input
        if(!(isNaN(wage))){   
        empDB.addEmployee(first, last, dateString, position, wage);
        }else {
            alert("Please enter a numerical value in the Wage field.");
        }
        
        empDB.viewDisplay();

});
//Shows View with a table populated with employees
//Edit Click
    $('#view-table').on('click','.edit-button',function(event){
        event.preventDefault();
        var i = $(this).closest('tr').data('index');
        console.log(i);
        empDB.addEmployee(i);
 
    });
//Remove Click
     $('#view-table').on('click','.delete-button',function(event){
        event.preventDefault();
        var tr = $(this).closest('tr');
        var i = tr.data('index');
        console.log(i);
        empDB.deleteEmployee(tr,i);
        
    }); 
    

        
//Add Click
    
//Submit Button Click
    //break link
    //add fields
    //
//Search Button Click
    

    
});



function ServiceClass(){
    initID = 10000;
}

function calculateAge(dob) { // birthday is a date
    var ageDifMs = Date.now() - dob.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

ServiceClass.prototype.generateID = function(){

        return initID++;
}

function EmployeeDB(){
    this.employees = [];
}

function Employee(name, employeeNum, age, doh, position, wage){
    this.name = name;
    this.employeeNum = employeeNum;
    this.age = age;
    this.doh = doh;
    this.position = position;
    this.wage = wage;
}

EmployeeDB.prototype.addEmployee = function(first, last, dateString, position, wage){

    
    //String concatination for full name
    name = first + " " + last;
    //Employee Number generation function
    employeeNumber = service.generateID();
    //Use stringToDate function on string representation of date    
    dob = new Date(dateString);
    console.log(dob);
    doh = new Date().toUTCString().substring(5,17);
    age = calculateAge(dob);
    wage = parseFloat(wage);
    //check
    
    var emp1 = new Employee(name, employeeNumber, age, doh, position, wage);
    this.employees.push(emp1);
    console.log(this.entries)

}


function stringToDate(dateString){
    var date = dateString.split("-");
    var y = date[0];  
    var m = date[1];
    var d = date[2];

    date = (new Date(y + "-" + m + "-" + d).toUTCString());
    return date.substring(5,17);
}

EmployeeDB.prototype.searchEmployees = function(search){
    var employees = this.employees;
    var match = false;
    var i = 0;
    while (match==false){
        if (employees[i].employeeNum == search){
            console.log("match!");
            match = true;
        }else{
            console.log("no matches");
            i++;
        }
    }

}

EmployeeDB.prototype.deleteEmployee = function(tr,i){
        this.employees.splice(i,1)
        console.log(empDB.employees);
        tr.remove();
}
EmployeeDB.prototype.editEmployee = function(index){
   var i = index;
    
    
    
}

EmployeeDB.prototype.viewDisplay = function(){
    //tartget tablebody and stor in variable
   tableBody = $('#view-table').find('tbody');
    //initialize injection
    var html = "";
    //Change heading to:
    var heading = "Add Employee";
    
    for ( var i = 0; i < this.employees.length; i++){
        //everything to inject into HTML
        html += "<tr data-index= " + i + "><th>" + this.employees[i].employeeNum + "</th>";
        html += "<td>" + this.employees[i].name + "</thd>";
        html += "<td>" + this.employees[i].age + "</thd>";
        html += "<td>" + this.employees[i].position + "</thd>";
        html += "<td>" + this.employees[i].doh + "</thd>";
        html += "<td> $" + this.employees[i].wage.toFixed(2) + "</thd>";
        html += "<td><a href='#'class='edit-button'>Edit</a></td>";
        html += "<td><a href='#' class='delete-button'>Delete</a></td></tr>";
        
    }
    //inject
    tableBody.html(html);
}

var empDB = new EmployeeDB();
var service = new ServiceClass();


empDB.addEmployee("Amanda", "Field", "1992-08-10", "Receptionist", 12);
empDB.addEmployee("Alice", "Bleh", "1989-07-22", "Designer", 40);
empDB.addEmployee("Bobbay", "Bleh", "1972-03-27", "CEO", 100);
empDB.addEmployee("Tim", "Timmy", "1989-12-30", "Developer", 40);

empDB.searchEmployees(10002);
console.log(empDB.employees);
empDB.viewDisplay();



