//: # Unit 2 Pre-Class Exercises

import UIKit

//: 1) Imagine you are creating a database that can hold usernames, passwords, addresses, and phone numbers. The username and password fields are required while the address and phone number fields may be blank. What types in Swift would you use to represent these fields? Why?

//: 2) Create the variables described in Exercise 1 and use type annotation to explicitly define their types.

//: 3) Given the following optional String variable, use an if let statement along with string interpolation to print a greeting when a value is present.
var name:String? = "John"


//: 4) Write an else condition on your if let statement from Exercise 3 which prints "No one's here" when the variable 'name' has no value. Experiment between giving 'name' a String value and a nil value.

//: 5) Using arithmetic operators, create a function to change any given temperature from Fahrenheit to Celsius.
//function template:
func convertTemperatureToCelsius(fahrenheitTemp: Double) -> Double {
    //add correct code here
    return 0.0
}
//: 6) Use the function you just wrote, along with string interpolation, to print a temperature conversion in a human-readable form, e.g. print "32F is equal to 0C".

//: 7) Create an array of 10 songs where each song is a dictionary. The dictionary contains the following keys: title, artist and album.

//: 8) Create a range of numbers from 1 to 20, then write a loop which prints out whether a number is a odd or even.

//: 9) Create a basic enumeration that holds the different values of chess pieces
enum ChessPiece {
    //enumeration cases go here
}
//: 10) Modify the enumeration you just wrote so that each enumeration case is given an implicitly defined String raw value

//: 11) Create an array of chess pieces and use a for-in loop along with a switch statement to print the type of each chess piece in the array

