 // Primitive data type (call by value ->> copied milte h)
 // 7 types:  String, Number, Boolean, null, undefined, Symbol,
 //            BigInt

const score = 100 // number defined
const scoreValue = 100.3;  // number hi h ye bhi

const  isLoggedIn = false;
const outsideTemp= null;
let userEmail ;  // undefined

const id= Symbol('123')
const anotherId =Symbol('123')
console.log(id === anotherId);  // o/p --> false

const bigNumber =6788994332345667886654434556677888n;   //bigint



 // Non-Primitive (call by reference)
 //  Array, Objects, Functions

 const heros =["shaktiman"," naagraj", "doga"]
  let myObj = {
    // curly braces ke ander object hota h
    name : "nidhi",
    age: 19,
    marks: 200,
}

const myFunction  = function(){
    console.log("Hello World");
}


console.log(typeof bigNumber);
//typeof se ---> null ka value ---> object aayga
// function  --->  object function
/*   Primitive datatypes:
String - string
Number - number
Boolean - Boolean
Null - object(****)
Undefined - undefined
BigInt - bigint

Non-primitive datatypes:
Array - object
Function - function(object)
Object - object

*/


 //JavaScript me data types runtime par decide hote hain,
 //  isliye ye dynamically typed language hai