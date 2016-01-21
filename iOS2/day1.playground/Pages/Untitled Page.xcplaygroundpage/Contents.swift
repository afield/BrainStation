//: Playground - noun: a place where people can play

import UIKit

//This is a variable
var str = "Hello, playground";
str
str =  "Welcome to BrainStation!";
str

//This is a constant
let pi = 3.1416;
pi

//TYPES

//primitive  -  boolean - Boolean basically means true or false
let isUserLoggedIn = true;
isUserLoggedIn;

//In Swift you aren't able to change types -- much more like Java :D - So when declaring something as an integer for ex. You won't be able to add a decimal later making it a DOUBLE
//You would have to create a new variable with a different name and declare it as a double.
let a = 10 + 5
let b = 10 - 3
let c = 9 * 7
let d = 21 / 3
//Modulus is the remainder of dividing a number by a number. If you use a number that is divisible (ex. 25 % 5) The answer will be 0, but if the number is not divisible by the second number you will have a remainder and that is what your modulus result will be.
//e = 7.3, because
let e = 24 % 3

25 % 5 //because 25 is divisible by 5 answer == 0

22.0 / 3 // 22 is not divisible by 3, so when you divide 22 by 3, your modulus answer will be what the remainder is.

let m = 22.9;
let n = 3;

m + Double(n)
Int(m) + n
var x = 25.8
// This is that same as x = x * 5.0
x *= 5.0

//this would be an example of increments and decrements 
//it is the same thing as saying x = x + 1 or x = x -1
//apparently this will not exist in Swift soon, I don't know why :S I use it in java
++x
x++

--x
x--

//Logical Operators

//This is basically all you need to know about logical operators
//It is as simple as it seems and if you put it in to a "logical" perspective, the answer only makes sense - First step of thinking like a computer =)

//The answer will only be true if both boolean values are true
//"and" operator
true && true
true && false
false && true
false && false

//The answer will be false only if both boolean values are false.
//"or" operator
true || true
true || false
false || true
false || false

//"not" -- basically just saying opposite of value ex( If (myName != Amanda) (If my Name is not Amanda))
!true
!false

(true || false) && true

//Comparison Operators

//boolean - true or false answers
//50 is greater than 40?
50 > 40
//50 is less than 40?
50 < 40
//50 is greater than or equal to 40?
50 >= 40
//50 is less than or equal to 40?
50 <= 40

// "is equal to"
50 == 40

//"is not equal to"
50 != 40

//An array is a list of items with indexes starting as index 0, 1, 2, 3 etc.
var books = [ "A Game of Thrones", "A Clash of Kings"]

var numbers = [1,2,3,4,5];

books[0]
books[1]

books[1] = "A Feast for Crows";

books

//Dictionary -- Everything has a key
//Word == Key - Definition == Value
//Before colon is key -- After colon is value
var phoneNumbers = ["Alice": "555-0123", "Bob": "555-9876" ];
//calling key for value of 555-0123
phoneNumbers["Alice"];
//changing key value
phoneNumbers["Alice"] = "123-4567";
phoneNumbers

var ages = ["Alice": 30, "Bob": 27, "Charles": 31];

var contacts = ["Alice": ["age": 30, "phoneNumber": "555-1234"]];

contacts["Alice"]

//This is a two-dimensional array
var matrix = [[1,0,0], [0,1,0], [0,0,1]]
matrix[0][1];

//this is how you add a new item to an array
books.append("A storm of Swords")


//Arrays are always copied when assigned to a new variable
var list1 = [1,2,3,4,5];
var list2 = list1

list1[0] = 100
list1
list2



// set - array that can only have unique values

//Ranges
//inclusive range
1...10
//Exclusive range
1..<10

0 ..< books.count

let myNameIs: String = "Tony";

"Hello, \(myNameIs), how are you?"

"The answer to life, the universe, and everything is \(6*7)"




//OPTIONALS
"Alice's phone number is \(phoneNumbers["Alice"])"
"Alice's phone number is \(phoneNumbers["Alice"]!)"


//Step 1 : Create a dictionary of names to e-mail address
var emailAddresses = ["Amanda": 23, "Eduard": 26, "Bob": 42, "Tony": 32]

//Step 2 : Print someone's e-mail address using string interpolation
//if they have one, otherwise print they don't have an email
if let amandasEmail = emailAddresses["Amanda"]{
    print("Amanda's email address is \(emailAddresses["Amanda"]!)");
}else{
    print("Amanda does not have an email");
}


//Step 3 : Change their e-mail address
emailAddresses["Amanda"] = 24;

//Step 4: Copy and paste step 2
print("Amanda's email address is \(emailAddresses["Amanda"]!)");



//Step 5: use print function


//now we can also use the print function
print("Alice's phone number is \(phoneNumbers["Alice"]!)")


