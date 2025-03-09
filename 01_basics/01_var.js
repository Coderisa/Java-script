// var is considered as outdated 
//The var keyword was used in all JavaScript code from 1995 to 2015.
//The let and const keywords were added to JavaScript in 2015.

/*
Scope: The var keyword declares variables with function scope or global scope (if declared outside a function). 
It is not block-scoped, meaning it does not respect the boundaries of {} blocks.

Re-Declaring JavaScript Variables-allowed for var 
If you re-declare a JavaScript variable declared with var, it will not lose its value.
The variable carName will still have the value "Volvo" after the execution of these statements:
var carName = "Volvo";
var carName;
Ex)var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2

Hoisting
Variables defined with var are hoisted to the top and can be initialized at any time.
Meaning: You can use the variable before it is declared:
Ex)carName = "Volvo";
var carName;//(correct)
--------------------------------------------------------------------------------------------------------------
Key points for let variable
*Variables declared with let have Block Scope
*Variables declared with let must be Declared before use
*Variables declared with let cannot be Redeclared in the same scope
Ex)-{
  let x = 2;
}
// x can NOT be used here

Ex)-let x = "John Doe";
let x = 0; //Error

Ex)//Redeclaring a variable with let, in another block, IS allowed:
let x = 10;
// Here x is 10
{
let x = 2;
// Here x is 2
}
// Here x is 10

//With let, redeclaring a variable in the same block is NOT allowed:
var x = 2;   // Allowed
let x = 3;   // Not allowed
{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}
{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}

Hoisting -Variables defined with let are also hoisted to the top of the block, but not initialized.
Meaning: Using a let variable before it is declared will result in a ReferenceError:
Ex)carName = "Saab";
let carName = "Volvo";//Error:ReferenceError: Cannot access 'carName' before initialization
