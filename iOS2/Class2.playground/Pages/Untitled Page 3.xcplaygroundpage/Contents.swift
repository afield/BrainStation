//: [Previous](@previous)

import Foundation

enum Subjects: String {
    // Put your schools subjects
    case English
    case Math
    case Geography
    case Art

}

//Step 1: Add a bunch of names and subjects to teh teachers dictionary
var teachers = ["Amanda": Subjects.English, "Alice": Subjects.Math, "Eduard": Subjects.Art, "Bob": Subjects.Geography];

//Step 2: For each name, print out what they teach using unwrapped optional and string interpolation
if let sub1 = teachers["Amanda"]{
    print("Amanda teaches \(sub1)");
}
if let sub2 = teachers["Alice"]{
    print("Alice teaches \(sub2)");
}
if let sub3 = teachers["Eduard"]{
    print("Eduard teaches \(sub3)");
}
if let sub4 = teachers["Bob"]{
    print("Bob teaches \(sub4)");
}

let interpolation = "The sum of 3 and 5 is \(3 + 5)";

// You should be able to print "Alice teaches Math"
//: [Next](@next)
