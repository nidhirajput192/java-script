//   decleration of string ----->>   " "  or  ' '
//  example-->> "nidhi"

//   const gameName = new String('nidhi')
//   string i sobject here not an array dont confuse
//   0 : "n"   (key:value)
//   1 : "i"   ( key: value) --> so on


//concatination
const name ="nidhi"
const marks = 50
//console.log( name + 50 + "any value we want"); // not best approach to write
//  -->  use backticks on place of (+)
console.log(`hello my name ${name} and my marks are ${marks}`);


const gameName = new String ('nidhi')
//can access value by it key
console.log(gameName[0]);    //--> o/p n
console.log(gameName.charAt(2));  // --> d


// .length
// .charAt(1)
// .toUpperCase
// .indexOf('y')

//break string into parts substring me dividation

const newString = gameName.substring(0,4)   //4 will not be included
console.log(newString);   //-->>  o/p nidh


const anotherString = gameName.slice(-8,6)   //MOST REPEAT
console.log(anotherString);    // ---> nidh

console.log("nidhi")  //---->> checking out     _--> nidhi

const newString1 = "    nidhi   "
console.log(newString);    
console.log(newString.trim());    //to remove gap in string before and after

const url = "https://nidhi.comnidhi%20rajput"
console.log(url.replace('20' , '_'))

//check karne ke liye
console.log(url.includes(" nidhi"));
console.log(url.includes("rajput"));






