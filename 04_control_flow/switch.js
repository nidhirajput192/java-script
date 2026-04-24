/*  SWITCH CASE statement */

/*   ---->>>  BASIC SYNTAX

switch(key) {
    case value: 

    break;

    default:
        break;
}

*/

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
      //  break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

/* 
 NOTE:  let suppose koi case match hogya h and matched case ke baad break nhi h to,
 aage ka saara code bhi run hoga but bss defalut match nhi hoga.
 */