//: [Previous](@previous)

//import UIKit
import Foundation

//uninitialized integer
var x: Int?
//? makes x an optional - aka it can either have a value or be nil - no value at all

//Not Allowed bcas=use no value for x:
//x + 1;

x = 20

//in the case of x having a value we can give it a new name
if let y = x {
    // code in here only runs if x has a value
    //must refer to it by the new name I have introduced
    //if this code is running, x is now y
    y + 1;
}

x = nil;
//this code will never run, because x has no value - x = nil
if let y = x {
    // code in here only runs if x has a value
    //must refer to it by the new name I have introduced
    //if this code is running, x is now y
    y + 1;
}
else {
    print("x does not have a value");
}

var name: String?

name = "Tony";
"Hello \(name)"


var usernames = [ "username": "Real Name" ]

if let reallyAName = name {
    usernames[reallyAName] = "Bob";
}
usernames

if name != nil {
    // Danger!
    usernames[name!] = "Charles";
}

usernames["adfzxcv"];
//

var ages = ["Alice": 30, "Bob": 27 ]

//you can not do arithmatic on optionals vv
//"Next year, Alice will be \(ages["Alice"] + 1)"

if let alicesAge = ages["Alice"] {
    "Next year, Alice will be \(alicesAge + 1)"
}

if let charlesAge = ages["Charles"] {
    "Next year, Charles will be \(charlesAge + 1)"
}


//if you were designing an app that makes a car with a make, model, year
//If I have all of the information then I am fine
//If this information was unknown you would make it an optional
//EX. police report - Honda (don't know model or year), make - optional String, year - optional Int


//: [Next](@next)
