console.log(2>1);
console.log(2>=1);   //answer will be in true and false 

console.log( null > 0);    //false
console.log( null == 0);    //false
console.log( null >= 0);   //true

console.log( undefined > 0); //false
console.log( undefined < 0); //false
console.log( undefined == 0); //false




//  Strict Check -->  === (to compare datatype and to compare values)

//Examples :
console.log(null == undefined);  // true 
console.log(null === undefined); // false 

console.log("" == 0);  // true 
console.log("" === 0); // false 

/* 
== performs type coercion before comparison,
 while === compares both value and type without coercion.
 
 Coercion ---> Ek type ko dusre type me convert karna.
*/

