// var is considered as outdated 
//The var keyword was used in all JavaScript code from 1995 to 2015.
//The let and const keywords were added to JavaScript in 2015.

/*
Scope: The var keyword declares variables with function scope or global scope (if declared outside a function). 
It is not block-scoped, meaning it does not respect the boundaries of {} blocks.

Re-Declaring JavaScript Variables
If you re-declare a JavaScript variable declared with var, it will not lose its value.
The variable carName will still have the value "Volvo" after the execution of these statements:
var carName = "Volvo";
var carName;

