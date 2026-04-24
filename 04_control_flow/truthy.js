 /*    truthy & falsy values   */

// FALSY VALUES
/* false, 0, -0, BigInt On, "", null, undefined, NaN --> inka alawa sab truthy h */

// TRUTHY values
/*   "0" , 'false', " false ", [], {}, function(){}  */


//----> empty array
const userEmail = []
if (userEmail.length === 0) {
    console.log("Array is empty");
}



//----> empty objects
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

/*  NOTE:
    false ==0  --> true
    false == '' --> true
    0 == ''   ---> true

*/



/*  NULLISH COALESCING OPERATOR (??): NULL INDEFINED   */

let val1;
val1= 5 ?? 10
val2 = null ?? 6
val3 = undefined ?? 70;

console.log(val1);  // 5, phli wali value hi li jaegi
console.log(val2); //  6 , null nhi lega 
console.log(val3); //  70, undefined bhi nhi liya jaega



/*      TERNIARY OPERATOR    */

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")