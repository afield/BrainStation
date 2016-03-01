//Value of name is a String variable representing your name
var name = "Amanda";

//Print to console hello and your name 
console.log("Hello " + name);

//Value of variable x is 1125
var x = 1125;

//Value of variable answer is x modulus 2;
var answer = x % 2;
console.log(answer);

//Value of variable a is true;
var a = true;
//Value of variable b is false;
var b = false;
//Value of variable c is true;
var c = true;
//What is the value of A OR B OR C?
console.log(a || b || c);
//What is the value of A AND B AND C?
console.log(a && b && c);
//Value of variable answer1 is 10 - 3 * 5/4 + 202 % 3 computed
answer1 = 10 - 3 * 5/4 + 202 % 3;
console.log(answer1);
//Value of variable answer2 is 10 - (3 * (5/4) + (202 % 3)) computed;
answer2 = 10 - (3 * (5/4) + (202 % 3));
console.log(answer2);
//Why are these values different?
/* Simple PEDMAS order of operations. answer1
1. 10 - 15 /4 + 202 % 3
2. 10 - 3.75 + 1
3. 6.25 + 1
4. 7.25


 Simple PEDMAS order of operations. answer2
1.  10 - (3 * 1.25 + 2);
2.  10 - (3.75 + 1);
3.  10 - 4.75;
4.  5.25
*/

//Convert Integer 12 into a String
var example1 = 12;
example1 = String(example1);
console.log(example1);

//Convert String 113 into an Integer
var example2 = "113";
example2 = parseInt(example2);
console.log(example2);

//Convert String 1.12356 into a Float
var example3 = "1.12356";
example3 = parseFloat(example3);
console.log(example3)
//Value of variable x is String 'Hello World' converted into an Integer
var myString = "Hello World";
var x = parseInt(myString);

console.log(x);
//Why was this the result?
/* The String "Hello World is not able to be converted into a string because it is Not a Number(NaN)

/********* DIVING DEEPER ***********/

//1.
var myString = "I am a BrainStation student";
var myString2 = "I am a student";
var rE = new RegExp(/BrainStation/);
var mySearch = myString.search(rE);
var mySearch2 = myString2.search(rE);
console.log(mySearch);
console.log(mySearch2);

//2.
rE = new RegExp(/BrainStation student/);
var newString = myString.replace(rE, "Junior Developer");
console.log(newString);