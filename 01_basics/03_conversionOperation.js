let score="33abc"
let a=null
let b=undefined
let c=true


console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score) //convert string to number
console.log(typeof valueInNumber);//number 
console.log(valueInNUmber);//NaN -Not a number


let valuea= Number(a) //convert null to number
let valueb= Number(b)  //convert undefined to number
let valuec=Number(c) //convert true to number
console.log(valuea)//0
console.log(valueb) //NaN
console.log(valuec) //1

/* --CONCLUSION---*/
/*
"33" => 33
"33abc" =>NaN
ture=>1 false =>0

*/

/* Boolean(value)
1 =>true,0 => false
""=> false
"ina" =>true
*/

===========================================
  let value=3
let negValue=-value
//console.log(negValue);

console.log("1" + 2);//12
console.log(1 +"2")//12
console.log("1" +2+2)//122
console.log(1+ 2+"2")//32
console.log((3 + 4) * 5 % 3);//learn to put barackets 
console.log(+true) //1
console.log(true +)//Syntax error
console.log(+"") //0

let num1 ,num2 , num3
num1 = num2 = num3 =100//but avoid 

//learn about prefix and postfix from js MDN or ecma
