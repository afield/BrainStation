//: [Previous](@previous)

import Foundation

//The general concept of a rocket
class Rocket {
    func thrust() -> Double {
        return 0.0
    }
    
}

class BasicRocket: Rocket {
   
    var myThrust: Double;
    init(thrust:Double){
        myThrust = thrust;
    }
    
    override func thrust() -> Double {
        return myThrust;
    }
}

class CompositeRocket: Rocket {
    let rockets: [Rocket]
    
    init(rockets: [Rocket]) {
            self.rockets = rockets
        }
    
    override func thrust() -> Double {
        var sum = 0.0
        for rocket in rockets{
            sum = sum + rocket.thrust()
        
        }
        return sum
    }
}

let rockets = [
    BasicRocket(thrust: 30.0),
    BasicRocket(thrust: 40.0),
    BasicRocket(thrust: 35.0),
    BasicRocket(thrust: 35.0)

]

//Step 1: Make BasicRocket return the correct amount of thrust
rockets[0].thrust() == 30.0
let leftRockets = CompositeRocket(rockets: [rockets[0], rockets[1]])
let rightRockets = CompositeRocket(rockets: [rockets[2], rockets[3]])

let lifter = CompositeRocket(rockets: [leftRockets, rightRockets])

//Step 2: Make Composite rockets return the sum of the thrust of all rockets
//: [Next](@next)
