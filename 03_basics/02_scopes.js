/*  SCOPE ----> { } */


var c  = 300
let a = 100
if(true) {
   let a = 10;
const b = 20;
var c = 30;

}

 console.log(a);   // error, a is not defined fro a = 10
 //console.log(b);   // error, b is nit defined
 console.log(c);     // 30 , print ho jega bcoz var is nit block scoped




/*  NESTED SCOPE */





/* METHOD: 1 => FUNCTION DECLERATION  */

console.log(addOne(5));    // 6, chal gya ye

function addOne(num){
    return num + 1
}


/* METHOD=>2 ---> Variable me hold kara denge function ko usko  function expression bolte h  */

console.log(addTwo(1)) // ReferenceError: Cannot access 'addTwo' before initialization

 const addTwo = function(num){
    return num+2
 }
  








