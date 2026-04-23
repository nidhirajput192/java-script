

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
  addTwoNumber();    // NaN 
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
   console.log("Result is :", result );        // but yeah undefined dikhayega, function return bhi maangta h



/*   TO AB ISKA SOLUTION IS , SAME function cooy karra h neeche hi */

 function addTwoNumber( number1, number2 ) {      // parameters 
   
   let result1 = number1 + number2;
   return result1;   // function me return likhne ke baad kuch bhi likha hoga wo exccute nhi hoga 


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



  /*   MORE EXAMPLE WITH DIFFERENT CONDITIONS*/
  //------>>>>
  function calculateCartPrice( num1){
    return num1;
  }
  console.log(calculateCartPrice(200, 400, 500, 2000));  //200, qki only num1 pass hua h ek hi parameter


  //------> saare arguments print ho by 1 parameter by using----> spread or Rest operator (..) triple dots
  function printData(...number1){     // Rest operator (...)
    return number1;
  }
  console.log(printData(200, 500, 600, 30000)); //  [ 200, 500, 600, 30000 ]  -->> array returned



  //------>adding val1, val2 before rest operator...its return last ki values...
  function logic( val1, val2, ...number2){
    return number2;
  }
 console.log(logic(200, 400, 500, 6000));  // 500, 6000 bcoz val1 me 2200 and val2 me 400 gya h.



 //----> talk about objects
 const object ={
  name:"nidhi",
  price:100
 }
 function handleObject(anyobject){
  console.log(`user is ${anyobject.name} and price is ${anyobject.price}`)
 }
 handleObject(object);  //  user is nidhi and price is 100


 //----->> Array
 const myNewArray =[100, 300, 700, 600]
 function returnSecondValue(getArray){
  return getArray[1]
 }
console.log(returnSecondValue(myNewArray));   //300
console.log(returnSecondValue([100, 300, 700, 600])); //300
  












