//console.log("2" > 1)
//console.log("02" >1)

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true the reason is that an equality check == and comparison <>= work diffrerently
//Comparisons convert null to a number ,treating it as 0.
console.log(null == undefined); //true (special case)

//That's why (3) null >=0 is true ans (1) null>0 is false
/*Relational Operators (>, <, >=, <=):

Convert null to 0 before comparison.

Example: null >= 0 → 0 >= 0 → true.

Equality Operator (==):

null is only equal to undefined, not to 0 or other values.

Example: null == 0 → false*/

console.log(undefined == 0)//false
console.log( undefined>0); // true (special case)
console.log( undefined<0); // true (special case)
// === datatype bhi check karta hai

