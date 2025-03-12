//primitive and non primitive ke beech mein differnce on the basis of kaise you store and access the data
// Primitive -Immutable: Their values cannot be changed, though variables holding them can be reassigned.
//Stored by Value: When assigned or passed, a copy of the value is created.

//7 Types:String,Number,Boolean,Null,Undefined,Symbol,BigInt
//JS is dynamically types language .WE do the need to specify the data types of a variavle while iitializtion.
//This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. 

//Reference (Non-primitive)-In JavaScript, reference data types refer to objects that store references (or memory addresses) rather than the actual values themselves. Unlike primitive data types, reference types are mutable, and when you manipulate them, you're working with the reference rather than a copy of the data.
 
//Array,Objects,Functions
const heroes=["Ina","Ishu"]
let myObj=
{
  name : "Ina",
  age: 20
}
let myFunction= function(){
  console.log("Hello World");
}
console.log(typeof bigNumber);// bigint
console.log(typeof score);//number
console.log(typeof myFunction)//returns function but iskoo bola jata hai function object
console.log(typeof heroes)//object
 console.log(typeof Temp)// objrct
  console.log(typeof Temp)// undefined
  
  // https://262.ecma-international.org/5.1/#sec-11.4.3

const score=100
 const scoreValue=100.3
const isLoggedIn =true
const Temp=null //empty
const email;//email=undefined
const id=Symbol('123')
const anotherId=Symbol( '123')
console.log(id===anotherId)//false
 const bigNumber=99999999999n//n lagane se num automatically becomes BigInt
  
  
