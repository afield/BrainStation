//: [Previous](@previous)

import Foundation

class Contact {
    var firstName: String
    var lastName: String
    
    //dedicated initializer function
    init(first: String, last: String){
        firstName = first;
        lastName = last;
    }
    
    //two types of initializers (dedicated and convenience initializer)
    convenience init(name:String){
        self.init(first: name, last:"Smith")
    }
}

let bob = Contact(first: "Bob", last: "Gazpacho")
bob.firstName
bob.lastName

let contacts = [ Contact(first: "Alice", last: "Zoolander"), Contact(first: "Bob", last: "Gazpacho") ]

class Animal {
    var name: String
    
    init(myName: String) {
        name = myName
        
    }
}

class Cat: Animal {
    var isTabby: Bool
    
    init(myName: String, tabby: Bool){
        isTabby = tabby
        super.init(myName: myName)
    }
    
    //you can override init if you want
    override init(myName:String) {
        isTabby = false
        super.init(myName: myName)
    }
}

let cat = Cat(myName: "Puss in Boots", tabby: false)
cat.name
cat.isTabby

let cat2 = Cat(myName: "mew")


//: [Next](@next)
