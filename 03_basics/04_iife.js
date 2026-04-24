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
} )('nidhi');     // ayha arguement de diya...  (REMEMBER ; Semicolon is very important)


//  Arrow Function Version---> function keyword ki jagha arrow laga denge
(() => {
  console.log("Also runs immediately!");
})();









console.log("JAVASCRIPT EXECUTION PHASE");


/*   JAVASCRIPT EXECUTION CONTEXT   
     three types  but mainly 2 which is 1 & 2:
     1. Global execution context   --> this ----> {}
     2. function execution context
     3. Eval execution context   --> having the property of global execution context


     --> assume hamara code rakh h { } isme,
     two parts me execute hota h
     1. Memory creation phase OR Creation Phase ---> isme sirf jo humne variables wghra likhe h 
                                                      unke liye memory locate hoti h, jagha ban jati h, 
                                                      koi bhi operation(-, +, *) perform nhi hote h 

    2.   Execution Phase --> mathematical operation wghra perform hote h                                            

*/


let val1 = 10
let val2 = 15
function addNum(num1, num2){
    let total = num1 + num2
     return total
}
 let result1 = addNum(val1, val2)
 let result2 = addNum( 10, 15) 
 console.log(result1)
 console.log(result2)


 /* so from the above code we can conclude that in starting of the
    javascript running situation the phases will be like

    CYCLE 1:   IN MEMORY PHASE--->
    val1 --> undefined
    val2 --> undefined
    addNum -> undefined
    result1 -> undefined
    result2  -> undefined
    BECAUSE it on give space to variables or function in memory.

    CYCLE 2 : EXECUTION PHASE
    val1 <-- 10
    val2 <--- 15

    addNum --->  ek new box create hoga, because ye function h
                  [isme new variable environment + execution thread] &
                  iske ander fir se above wale 2 phase ban jaenge....that is
                  1.  MEMORY PHASE
                  2.  EXECUTION PHASE
                  ------> HMESHA NEW BANENGE WO BOX JISME HOGA 
                  [isme new variable environment + execution thread]
                  JAB BHI KOI FUNCTION AAYEGA,HAAR FUNCTION KE LIYE NEw



 So again in

 1. MEMORY PHASE --> 
 val1  --> undefined
 val2  --> undefined
 total --> undefined

 2. EXECUTION PHASE-->
 num1 --> 10
 num2 --> 15
  total --> 25
  now ye total return bhi ho rha h to wo globel executional conext me.

!!!! YAHA TAK KAAM HON EKE BAAD WO NEW JO EXECUTION THREAD BANA THA WO DELETE HO JATA H!!!!!!

TO AB hum iske deletion ke baad seedh uper wale execution phase se bhi uper
wale execution phase pr pahuch gye h...
waha pr ab add hoga ab

Result 1= 25
 aab aaya Result2 --. which is also function
 and now firse same kahani chalue hoga and now firse...

 EK BOX BANEGA NAMED ---> [isme new variable environment + execution thread]
                      and again same phases

  1. MEMORY PHASE 
  2. EXECUTION PHASE

  and inme same  firse wahi sab...
  1. MEMORY PHASE --> 
 val1  --> undefined
 val2  --> undefined
 total --> undefined

 2. EXECUTION PHASE-->
 num1 --> 10
 num2 --> 15
  total --> 25
  and firse total --> 25 hojega and
   ye firse wapas uper jega globla execution context me.

   */




   /*  CALL STACKS 
   
   LIFO concept used --> last in first out concept when multiple functions are in stack.

   ye code run karaya h console me as an example--->

   function one() {
    console.log("one")
}
function two() {
    console.log("two")
}
function three() {
    console.log("three")
}
one()
two()
three()

   */
