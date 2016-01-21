//: [Previous](@previous)

import Foundation

let temperature = 11;

if temperature < 0{
    print("It's cold!")
}else if temperature > 0 && temperature < 20{
    print("It's moderate!");
}else {
    print("It's hot!");
}

//You can add else-if between the "if" and the last "else"
if temperature < 0 {
    print("It's cold!");
}else if temperature > 20{
    print("It's hot!");
}else {
    print("It's boring");
}

//You don't need  afinal else
if temperature < 0 {
    print("It's cold!");
}else if temperature > 20 {
    print("it's hot!");
}

//Be careful, only first true case runs!
if temperature < 0 {
    print("It's Cold!");
}else if temperature < -15 {
    //This case will nebver run!
    print("It's really cold!)")
}

enum Directions {
    case North, East, South, West
}
let dir = Directions.East

//Switches give us a shorter syntax for lots of if, else-if
switch dir {
case .North: print("Head North")
case .East: print("Head East")
// Two options: List all enumeration values, or use "default"
case .West: print("Go West, Life is Peaceful There")
default: print("Go \(dir)")
}



//S
//: [Next](@next)
