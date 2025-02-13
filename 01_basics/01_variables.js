const accountId=14453 // cont keyword should be iniatalized ,value cannt be changes ,reassigned ,reinitialized
let email="inaishu2426@gmail.com"
var password=12345  
accountCity="Jaipur"
let accountState;

console.log(accountId);

/* 
Prefer not to use var 
becoz of issue in block scope and functional scope
*/
console.table([accountId,email,password,accountCity,accountState])
