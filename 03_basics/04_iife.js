/*  
 Immediately Invoked Function Expressions(IIFE) : jo function
immidiately invoked ho jae..(global scope ke polluation se problem
hoti h bht baar, to global scope ke variables ye,golbal sscope ke 
pollution ko remove karne ke liye humne iife ka use kiya h)  

Immediately Invoked Function Expressions (IIFEs) are functions 
in JavaScript that run as soon as they are defined.
*/


//  named iife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();    // semicolonn is imppo between two iife


// without named iife
( (name) => {          //parameter de diya yaha
    console.log(`DB CONNECTED TWO ${name}`);
} )('nidhi')     // ayha arguement de diya...


//  Arrow Function Version---> function keyword ki jagha arrow laga denge
(() => {
  console.log("Also runs immediately!");
})();