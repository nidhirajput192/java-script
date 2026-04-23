

/* FUNCTION BANANA */  // pure ko bolte h function defination
function sayMyName() {

    console.log("N");
console.log("I");
console.log("D");
console.log("H");
console.log("I");

}

/*       sayMyName ---> ye sirf reference kehlata h   */
 sayMyName()   // calling of function, function execute ese hoga, output aayega ese





 /* NEW EXAMPLE OF FUNCTION --> ADD TWO NUMBERS */
  function addTwoNumber( number1, number2 ) {      // parameters 
    //number1 + number2;  // wrong
    console.log(number1 + number2);

  }  
   addTwoNumber(4 , 8);   //12                   // arguments bolte h
    addTwoNumber(4 ,"8");   // 48
     addTwoNumber(4 , "a");   //4a
      addTwoNumber("a" , 8);     // a8
       addTwoNumber(4 , null);  // 4
        addTwoNumber(null , 8);   // 8
         addTwoNumber(4 , undefined); //NaN
          addTwoNumber(undefined , 8);   // NaN

          /* ONE INTRESTING FEATURE */
   
   //if i store sum into another variable like....
   const result = addTwoNumber(4,8)       // yaha 12 aayega output
   console.log("Result is :", result );        // but yeah undefined dikhayega



/*   TO AB ISKA SOLUTION IS , SAME function cooy karra h neeche hi */

 function addTwoNumber( number1, number2 ) {      // parameters 
   
   let result1 = number1 + number2;
   return result1;   // function likhe ke baad kuch bhi likha hoga wo exccute nhi hoga 


  }  
 const result1 = addTwoNumber( 4, 8);



 /* TO BE REMEMBERED OUTPUTS IN TERMINAL */
console.log("<----------------- NIDHI RAJPUT ------------------>")





/*ANOTHER EXAMPLE OF FUNCTION THROUGH NEW WAY */

function loginMessage ( username) {    
    /* agar mai uper (username = "sam") ye kardu to, agrument me mai kuch paas nhi karu to samm to
    atleast print hoga hi, or koi value paas karu agrument me to wahi pass hogi */

    if(username== undefined){               // ( !undefined )
        console.log("Pease enter a username");
        return;

    }
    return `${username} just logged in`
}

// console.log(loginMessage("nidhi"));
  console.log(loginMessage());  // undefined aayega if nothing in argument











