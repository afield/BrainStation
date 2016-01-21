//: [Previous](@previous)

import Foundation

//The FizzBuzz Test:
//
// For each number from 1 to 100:
//1. If the number is divisible by 3, print out "Fizz"
//2. If the number is divisible by 5, print out "Buzz"
//3. If the number is divisible by 3 and 5, print out "FizzBuzz"
//4. Otherwise, just print the number

// Reminder: this is how you check if x is divisible by y: "if x % y == 0"

for x in 1...100{
    var result: String;
    if (x % 3 == 0 && x % 5 == 0){
        result = "Fizz";
    }else if (x % 5 == 0){
        result = "Buzz";
    }else if (x % 3 == 0){
        result = "FizzBuzz";
    }else{
        result = "\(x)"
    }
    
    print(result)
}



//: [Next](@next)
