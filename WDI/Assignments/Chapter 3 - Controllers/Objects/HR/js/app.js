
function ServiceClass(){
    initID = 10000;
}

ServiceClass.prototype.generateID = function(){

        return initID++;
}

function EmployeeDB(){
    this.employees = [];
}

function Employee(name, employeeNum, dob, doh, position, wage){
    this.name = name;
    this.employeeNum = employeeNum;
    this.dob = dob;
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
    dob = new Date(dateString).toUTCString().substring(5,17);
    doh = new Date().toUTCString().substring(5,17);
    wage = parseFloat(wage);

    var emp1 = new Employee(name, employeeNumber, dob, doh, position, wage);
    this.employees.push(emp1);
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

var empDB = new EmployeeDB();
var service = new ServiceClass();


empDB.addEmployee("Amanda", "Field", "1992-08-10", "Receptionist", 12);
empDB.addEmployee("Alice", "Bleh", "1989-07-22", "Designer", 40);
empDB.addEmployee("Bobbay", "Bleh", "1972-03-27", "CEO", 100);
empDB.addEmployee("Tim", "Timmy", "1989-12-30", "Developer", 40);

empDB.searchEmployees(10002);
console.log(empDB.employees);



