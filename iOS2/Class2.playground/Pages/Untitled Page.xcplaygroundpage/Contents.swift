//: Playground - noun: a place where people can play

import UIKit

var count: Int?

var x = 0;

//Optionals may have a value, so check with an if let
if let unwrappedCount = count {
   // This code only runs if count has  value (i.e., is not nil)
    
    let x = unwrappedCount + 5;
}

x + 3;

let emails = [ "Alice": "alice@example.com", "Bob": "bob@gmail.com" ];

// This is optional , needs to be unwrapped
let alicesEmail = emails["Alice"];
// This is force unwrapped
let bobsEmail = emails["Bob"];
// This will crash if force unwrapped!
let charlesEmail = emails["Charles"];

//These two are equivalent
let numbers1: [Int] = [1,2,3];
let numbers2: Array<Int> = [1,2,3];

// What's this type?
let json = ["articles": [["title":"Article Title", "author": "..."]]];

// inner-most [ "title": "Article Title", "author": "..."]
//Dictionary<String, String>, a.k.a, [String: String]

// next one out: [ [ "title": "Article Title", "author": "..." ]]
// Array<Dictionary<String, String>>

//outer-most: [ "articles": [ [ "title": "Article Title", "author": "..." ]]]
//Dictionary<String, Array<Dictionary<String, String>>>

// Using forced unwrapped to keep it brief:
let title = json["articles"]![0]["title"]!

// Using the safe method
if let articles = json["articles"] {
    if let title = articles[0]["title"]{
        // Do something with the title
    }
}
