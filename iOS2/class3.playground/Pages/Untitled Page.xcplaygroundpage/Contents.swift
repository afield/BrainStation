//: Playground - noun: a place where people can play

import UIKit

let contacts1 = [
    [ "firstname": "Alice", "lastname": "Zoolander" ],
    [ "firstname": "Bob", "lastname": "Gazpacho" ]
]

class Contact {
    var firstName: String?
    var lastName: String?
}

var bob = Contact()
bob.firstName = "Bob";
bob.lastName = "Gazpacho"

var alice = Contact()
alice.firstName = "Alice"
alice.lastName = "Zoolander"

let contacts2 = [alice, bob]

print(contacts2[0].firstName)