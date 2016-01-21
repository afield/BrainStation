//: [Previous](@previous)

import Foundation

//Explicit long form
enum Directions {
    
    case North
    case South
    case East
    case West
}

//Short form
enum Directions2 {
    case North, South, East, West
}

//Fully explicit Form
let direction1: Directions = Directions.East;

//Explicit value
let direction2 = Directions.North;

//Explicit type, short form value
let directions3: Directions = .South

var directions4: Directions

directions4 = .East;
directions4 = .North;

//This won't work because it doesn't know which enumeration provides "East"
//let directions

//: [Next](@next)
