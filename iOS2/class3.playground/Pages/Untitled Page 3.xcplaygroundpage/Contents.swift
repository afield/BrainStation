//: [Previous](@previous)

import Foundation

class NumberFormatter {
    func format(x: Double) -> String {
        return "\(x)"
        
    }
}

//prints a weight in grams with either a 'g' or 'kg suffix
class WeightFormatter: NumberFormatter {
    override func format(x: Double) -> String {
        if(x < 1000){
        return "\(x)g"
        }else{
            return "\(x/1000)kg"
            
        }
    }
}

//prints a distance in metres with either a 'm' or 'km' suffix
class DistanceFormatter: NumberFormatter {
    override func format(x: Double) -> String {
        if(x < 1000){
            return "\(x)m"
        }else{
            return "\(x/1000)km"
        }
    }
}

let numbers: [Double] = [123, 1986]
let formatters: [NumberFormatter] = [ WeightFormatter(), DistanceFormatter() ]

for formatter in formatters {
    for number in numbers {
        formatter.format(number)
    }
}
//: [Next](@next)
