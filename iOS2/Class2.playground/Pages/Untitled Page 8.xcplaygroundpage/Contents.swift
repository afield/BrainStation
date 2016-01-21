//: [Previous](@previous)

import Foundation

//Make "numbers" an empty array of type Int
var numbers: [Int] = []
for x in 1...100{
    numbers.append(x)
}

// Create a new array of type Int with all the numbers in 
// "numbers" that are divisible by 3

var multiplesOfThree: [Int] = [];
for x in numbers {
    if(x % 3 == 0){
        multiplesOfThree.append(x);
    }else if(x % 5 == 0){
        multiplesOfThree.append(x);
    }else if(x % 7 == 0){
        multiplesOfThree.append(x);
    }
}

//: [Next](@next)
