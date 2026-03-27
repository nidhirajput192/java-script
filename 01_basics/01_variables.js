const accountId=144557      // <-------can't change const
let accountEmail="nidhi@amazon"
var accountPassword = "12345"
accountCity =  "Jipur"   //----> variable ese bhi declear ho skata h but not a good method

let accountState;  //<---- undefined kyuki kuch given hi nhi h


 //accountId = 2     //error--> assignment to constant variables


 /*
only use const(constant decleration keyword) and let(variable declaration keyword)...
prefer not to use var
because of issue in block space and functional scope 

 
 
 
 //scope 
  {

  }
*/

 accountEmail="sahas@google"
 accountPassword="76767"
 accountCity="ramnagar"

console.log(accountId);

console.table([accountEmail,, accountState, accountId, accountPassword, accountCity])
