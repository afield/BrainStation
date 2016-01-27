//: [Previous](@previous)

import Foundation

class Animal {
    func speak() -> String {
        return ""
    }
}

let animal = Animal()
animal.speak()

//class Cat "is a" animal
class Cat: Animal {
    override func speak() -> String {
        return "Meow"
    }
}

let cat = Cat()
cat.speak()

class Dog: Animal{
    var scared = false
    override func speak() -> String {
        if(scared){
            return "Bark"
        }else{
            return "Woof"
        }
    }
}

let dog1 = Dog()
dog1.speak()

var dog2 = Dog()
dog2.scared = true
dog2.speak()


//: [Next](@next)
