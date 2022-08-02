console.log("Operators: ")

/**
 * 1. Assignment Operator  (=)
 * 2. Arithmetic Operators
 *  => +,-,*,/,%
 * 3. Logical Operator 
 *  => OR  AND  & NOT
 * 4. Condiontioal operator:
 *  ==, !=, <,>,<=,=>
 * 
 */

// Assignment Operator 
let data = 3;
// console.log(data)

// Arithmetic Operators 
let a = 2;
let b = 4;
let result = a+b //additon
result = a-b; //sub
result = a*b; //mul
result = a/b; // divi
result = a%b  // mod 
result = a**b
// console.log("Result is ",result)

// Logical Operators in Js 

// !  not operator will revese the value 
c = false
// console.log(!c)

//OR logic
d = true
e = true
res = d | e
console.log("OR operation " ,res)

//And logic
res = d & e
console.log("AND operation :",res)



//coditional oerpators:

let newdata = 12
let newupdate ="12"
//Equation compasriosn operators 
// console.log(newdata==newupdate)

console.log(3>2)
console.log(3<2)
let m = 36
console.log(m>=35)
console.log(m<=35)



// TERnary operator : 
m = 3;
// if(m>=35)
// {
// console.log("Passed")
// }
// else
//  {
//     console.error("fail")
// }

 m>35 ? console.log("passed"): console.error("fails")


 1 == 1 ? console.log("true 1 ==1 gotybha;fgd"): console.log("false")
 if(1 ==2){
    console.log(true)
 }
 else{
    console.log(false)
 }