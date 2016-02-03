//ADD BUTTON
//NEW FORM BLANK SLATE, NO DATA
//hasIndex = false;
//SEARCH
//VIEWS

var hasIndex = false;
$(document).ready(function () {
    //EVENT LISTENERS
    $('#dob').val('1990-01-01');

    //Employees Click
    $('#form').on('click', '#submit-button', function (e) {
        e.preventDefault();
        //variable to grab the form 
        var form = $('#form');
        var eform = $('#edit-form');
        var vtable = $('#view-table');
        console.log(form);
        //Locate and initialize variables
        var first = form.find('input[id="first-name"]').val();
        var last = form.find('input[id="last-name"]').val();
        var dateString = form.find('input[id="dob"]').val();
        console.log(dateString);
        var position = form.find('input[id="position"]').val();
        var wage = form.find('input[id="wage"]').val();
        console.log(hasIndex);
        //error handling for wage input
        //if(!(isNaN(wage))){   
        empDB.addEmployee(first, last, dateString, position, wage);
        // }else {
        //   alert("Please enter a numerical value in the Wage field.");
        //}

        empDB.viewDisplay();

    });
    //Edit Click
    $('#view-table').on('click', '.edit-button', function (event) {
        event.preventDefault();
        var i = $(this).closest('tr').data('index');
        console.log(i);
        empDB.editEmployee(i);

    });
    //Remove Click
    $('#view-table').on('click', '.delete-button', function (event) {
        event.preventDefault();
        var tr = $(this).closest('tr');
        var i = tr.data('index');
        console.log(i);
        empDB.deleteEmployee(tr, i);

    });

    //Add Click
    $('#view-table').on('click', '#add-button', function (event) {
        event.preventDefault();
        clearForm();

    });

});



function ServiceClass() {
    initID = 10000;
}

ServiceClass.prototype.generateID = function () {
    return initID++;

}


function calculateAge(dob) { // birthday is a date
    var ageDifMs = Date.now() - dob.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function clearForm() {
    $('#first-name').removeAttr('data-index').removeAttr('value').val('');
    $('#last-name').val('');
    $('#dob').val('1990-01-01');
    $('#position').val('');
    $('#wage').val('');
    console.log("It ran!");
    hasIndex = false;
}

function Employee(name, employeeNum, dob, doh, age, position, wage) {
    this.name = name;
    this.employeeNum = employeeNum;
    this.dob = dob;
    this.doh = doh;
    this.age = age;
    this.position = position;
    this.wage = wage;
}

function EmployeeDB() {
    this.employees = [];

}

EmployeeDB.prototype.addEmployee = function (first, last, dateString, position, wage) {


    //String concatination for full name
    var name = first + " " + last;
    var employeeNumber;
    //Use stringToDate function on string representation of date    
    var dob = new Date(dateString);
    var doh = new Date().toUTCString().substring(5, 17);
    var age = calculateAge(dob);
    var wage = parseFloat(wage);

    if (hasIndex) {
        i = $('#first-name').data('index');
        employeeNumber = this.employees[i].employeeNum;
        var temp2 = new Employee(name, employeeNumber, dateString, doh, age, position, wage);
        empDB.employees[i] = temp2;
    } else {
        //Employee Number generation function
        employeeNumber = service.generateID();
        var temp1 = new Employee(name, employeeNumber, dateString, doh, age, position, wage);
        this.employees.push(temp1);
        console.log(this.employees)
    }
    hasIndex = false;
}

EmployeeDB.prototype.viewDisplay = function () {
    //tartget tablebody and stor in variable
    tableBody = $('#view-table').find('tbody');
    //initialize injection
    var html = "";
    //Change heading to:
    var heading = "Add Employee";

    for (var i = 0; i < this.employees.length; i++) {
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

EmployeeDB.prototype.searchEmployees = function (search) {
    var employees = this.employees;
    var match = false;
    var i = 0;
    while (match == false) {
        if (employees[i].employeeNum == search) {
            console.log("match!");
            match = true;
        } else {
            console.log("no matches");
            i++;
        }
    }

}

EmployeeDB.prototype.deleteEmployee = function (tr, i) {
    this.employees.splice(i, 1)
    console.log(empDB.employees);
    tr.remove();
}
EmployeeDB.prototype.editEmployee = function (index) {
    var i = index;
    var name = this.employees[i].name.split(" ");
    var first = name[0];
    var last = name[1];
    var wage = parseFloat(this.employees[i].wage);
    console.log(wage)
    $('#first-name').attr('data-index', i).val(first);
    $('#last-name').val(last);
    $('#dob').val(this.employees[i].dob);
    $('#position').val(this.employees[i].position);
    $('#wage').val(wage);
    $('#form').attr('data-index', i);
    hasIndex = true;
    return console.log(hasIndex);
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