//: [Previous](@previous)

import Foundation


// This is an old c style for loop:

for var x = 0 ; x < 10 ; x++ {
    print(x)
}

//it will no longer be valid in Swift 3! The correct way is:

for x in 0..<10{
    print(x)
}

var condition = false;
while !condition{
    // Do something that changes conditiokn
    condition = true;
}

// Using "break" to stop a while loop inside the loop
condition = false;
var iterations = 0
while !condition {
    if iterations > 100{
        break
    }
    iterations = iterations + 1
}

// A similar form is repeat-while
condition = false

repeat{
    print("Running repeat-while")
} while condition;

iterations = 0
condition = false;
while !condition {
    iterations = iterations + 1
    if iterations % 2 == 0 {
        //"Continue" jumps to the next cycle of the loop
        continue
    }
    print("Iteration \(iterations)")
    if iterations > 100 {
        condition = true;
    }
}

//: [Next](@next)
