//: [Previous](@previous)

import Foundation

//Functions give a name to a block of code
func someFunction(){
    print("someFunction is running")
}

//We run the code by "calling" the name of the function
someFunction()
someFunction()

func isDivisibleBy(x: Int, y: Int) -> Bool {
    return x % y == 0
}

//Call isDivisibleBy with 
isDivisibleBy(15, y: 3)
isDivisibleBy(15, y: 3)

// A slightly sumpler function
func isDivisibleBy3(x: Int) -> Bool{
    return x % 3 == 0
}
func isDivisibleBy5(x: Int) -> Bool{
    return x % 5 == 0
}

var numbers: [Int] = []
for x in 1...100 {
    numbers.append(x)
}

numbers.filter(isDivisibleBy3)
numbers.filter(isDivisibleBy5)

//There are differenct rules for when you need to include the
// name of the paramete when you call the funtion

//By default, you don't need to include the name of the 
// first parameter, but you need to include the rest
func isTriangleNumbers(x:Int, y:Int, z: Int) -> Bool{
    //"x squared plus y squared is equal to z squares"
    return x * x + y * y == z * z
}
isTriangleNumbers(2, y: 3, z: 4)

//The name of the parameter when you call the function can
//be different from the name of the parameter instead of the
//function!

func addNumber(x:Int, toNumber y: Int) -> Int {
// Outside the function, it's "toNumber", inside the 
//function it's "y"
    return x + y
}

addNumber(123, toNumber: 456)

// We can also force the caller to name the first parameter
func getRectangleArea(width width: Int, height: Int) -> Int{
    return width * height
}

getRectangleArea(width: 100, height: 80)


//Challenge:
//
//Given an Array of Dictionaries of the form:
// [ "name":"<person's name>", "occupation":"<occupation>"]
//Write a function that will list the names of all the
//people with a given occupation

var people: [ [String: String ] ] = []
people.append(["Alice": "Programmer"])
//Add a bunch more please!
people.append(["Eduard": "Nerd"])
people.append(["Amanda": "Cool Person"])
people.append(["Tony": "Teacher"])

func peopleWithOccupation(occupation: String) -> [String] {
    var matchingPeople: [String] = []
    // "person" will be a [String:String] dictionary
    for person in people {
        // The dictionary has a single key-value pair, where
        // The key is the person's name and the value is 
        // person's job.
        for (name, job) in person{
            if job == occupation {
                matchingPeople.append(name);
            }
        }
    }
    return matchingPeople
}

let programmers = peopleWithOccupation("Programmer")

//Given the code above, if peopleWithOccupation were
//Working correctly, this would be listing Alice.


//Challenge (Part 2)
//
// Change the above to use an enum for the occupation instead
// of a string. Create a function that uses a switch
// statement to return the namesof people who work in IT
// jobs (e.g., Programmer, Network Analyst)

enum Occupation {
    case Programmer
    case Musician
    case NetworkAnalyst
}

var people2: [[String]]
func peopleInIT() -> [String] {
    return []
}


    //: [Next](@next)
