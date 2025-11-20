const accountId=144557      // <-------can't change const
let accountEmail="nidhi@amazon"
var accountPassword = "12345"
accountCity =  "Jipur"

let accountState;  //<---- undefined


 //accountId = 2     //error--> assignment to constant variables


 /*

prefer not to use var
because of issue in block space and function
 //scope 
  {

  }
*/

 accountEmail="sahas@google"
 accountPassword="76767"
 accountCity="ramnagar"

console.log(accountId);

console.table([accountEmail,, accountState, accountId, accountPassword, accountCity])
