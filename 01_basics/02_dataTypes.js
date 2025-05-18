"use strict";//treat all JS code as newer version

// alert(3+3) //we r usong nodejs not browser to nhi chal rha

console.log(3+3) ;console.log("ina") //code readibility should be high
//Documentation -MDN ,TC39

JavaScript has 8 Datatypes
//number => 2 to power 53
//bigint
//string => "" or ''
//boolean =>true/false
//null => standalone value, let user = null; // No user yet, intentionally left empty.
//undefined=> let age;
//symbol=>unique

//object
The Object Datatype
The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:

objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
console.log(typeof undefined);//undefined
console.log(typeof null);// object
/*
Feature	null	undefined
Type	Object	Undefined
Assigned by	Developers (explicitly)	JavaScript (implicitly)
Purpose	Intentional absence of value	Lack of assignment (default)
Usage	Clear or reset a variable	Uninitialized or missing values

ex) // Numbers:
let length = 16;
let weight = 7.5;
All JavaScript numbers are stored as decimal numbers (floating point).

Numbers can be written with, or without decimals:

Example
// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;

// Strings:
let color = "Yellow";
let lastName = "Johnson";
Note
When adding a number and a string, JavaScript will treat the number as a string.
Ex) let x = 16 + "Volvo";//= let x = "16" + "Volvo";
JavaScript evaluates expressions from left to right. Different sequences can produce different results:
Ex)let x = 16 + 4 + "Volvo";// 20Volvo
Ex)let x = "Volvo" + 16 + 4;// Volvo164


// Booleans
let x = true;
let y = false;


// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

//JavaScript BigInt
All JavaScript numbers are stored in a 64-bit floating-point format.

JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

Example
let x = BigInt("123456789012345678901234567890");
*/
JavaScript Types are Dynamic
JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

Example
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String

