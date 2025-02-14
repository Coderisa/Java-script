//Primitive

//7 Types:String,Number,Boolean,Null,Undefined,Symbol,BigInt
//JS is dynamically types language .WE do the need to specify the data types of a variavle while iitializtion.
//This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. 

//Reference (Non-primitive)
 
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
console.log(typeof myFunction)//function but iskoo bola jata hai function object
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
  
  
