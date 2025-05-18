const accountId=14453 // cont keyword should be iniatalized ,value cannt be changes ,reassigned ,reinitialized
//accountId=2//not allowed
let email="inaishu2426@gmail.com"
var password=12345  
accountCity="Jaipur"
let accountState;//undefined
//accountId=23;//Error: Assignment to constant variable.

console.log(accountCity); 

/* 
Prefer not to use var 
becoz of issue in block scope and functional scope
*/
console.table([accountId,email,password,accountCity,accountState])//prints everything in table format
/*┌─────────┬─────────────────────────┐
│ (index) │ Values                  │
├─────────┼─────────────────────────┤
│ 0       │ 14453                   │
│ 1       │ 'inaishu2426@gmail.com' │
│ 2       │ 12345                   │
│ 3       │ 'Jaipur'                │
│ 4       │ undefined               │
└─────────┴─────────────────────────┘
Difference Between var, let and const
      Scope	 Redeclare 	Reassign	Hoisted	Binds this
var	    No	  Yes       	Yes       	Yes 	Yes
let   	Yes	  No        	Yes        	No	  No
const 	Yes 	No        	No	        No  	No
*/
