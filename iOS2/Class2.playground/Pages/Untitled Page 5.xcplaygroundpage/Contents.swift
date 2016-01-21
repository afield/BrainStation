//: [Previous](@previous)

import Foundation

let numbers = [1,2,3,4,5]

var sum = 0

//This loops through numbers, setting the variable number to each value in turn
for number in numbers {
    sum = sum + number;
    
}

//We can also loop through dictionaries with for-in statements

let ages = [ "Alice": 30, "Bob": 27, "Charles": 32];

var sumOfAges = 0;

// Instead of "for <var> in <list>", it's "for (<key>, <value>) in <dictionary>"
for (name, age) in ages {
    sumOfAges = sumOfAges + age;
}

print("The group is \(sumOfAges)");

sum = 0
for x in 1...100 {
    sum = sum + x
}
print("The sum from 1 to 100 is \(sum)");


print("The sum is \(sum)");


//: [Next](@next)
