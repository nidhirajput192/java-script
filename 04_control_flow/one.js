/*    IF  
  comparision operators -- <, >, <=, >=, ==, !=, ===

*/

if ( 2 == "2") {
    console.log("executed");  // executed
}


if ( 2 === "2") {
    console.log("executed");   // nothing in output
}

// if ( 2!=3) {
//     console.log("not equal")
// }


if ( 2==3) {
    console.log("not equal")   // nothing in output
   
}


console.log("+++++++++++++++++++++++++++++++++++++++++++++")




const todayTemp = 50;
const isNidhiloggedin = false;
if(todayTemp > 90){
    console.log("greater than 90")     // nothing in output
}
console.log(" temp is less than 90");  // always print hoga qki scope se bhar h...




/*    ELSE with IF */

const todayTemperature = 20;
const isRikkiloggedin = false;

if(todayTemperature < 90){
    console.log("smaller than 90")     
}
else {
console.log(" temperature is less than 90");  

}  


/*  SCOPE KA CONCEPT */

const score = 100;
if( score > 50) {
    let power = "fly";
    console.log(`user power is ${ power}`)
}
console.log(`user power not is ${ power}`)  // yaha ye dega REfrence error LET ke case me because let is block scoped


/*  if, else if, else if, else 
    
    SYNTAX :
    if () {
    }
    else if() {
    }
    else if(){
    }
    else()
    
    
    */

//  ---->> (condition && condition && condition) ==> saari condition true honi chaiy eto hi code run hoga otherwise ERROR
//  --->> ( condition || condition || condition) ==>  koi bhi ek true ho jae to run hoga 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

