/*  objects are decleared in 2 ways
1--> literal   --> singleton nhi bnata h
2--> constructor   -> hamesha singleton banta h

-->> Singleton--> literal ki trha decleAR karenge to singleton nhi
      banta h
-->>  constructor se banega to hmesha singleton banega   

*/



/*  ek symbol ko declear karke usko symbol ki trha print karana h */

//object literals

/* Decleration of object */
const jsuser ={}  //empty object


/* 2nd METHOD OF DECLERATION 
  object.create  --> constructor method ke throught hota h, we will talk later about it.
*/


/* DECLERATION OF SYMBOL */
const mySym = Symbol("key1")


const jsuser1 = {
    name: "nidhi",
    "full name" : " nidhi rajput", //  -> how to access?? impossible by dot, then how???, to bracket me double commas se 
    age : 18,
    [mySym]: " mykey1",   // Ye symbol h  --->>> INTERVIEW IMPORTANT
    location : "nagina",
    email: "nidhi@google.com",
    isLoggedinDays :false,

}

//acessing methods
console.log(jsuser1.email);  // ese bhi
console.log(jsuser1["email"]);   // or ese bhi access kar sakte h 
console.log(jsuser1["full name"]);
console.log(jsuser1[mySym]);


//to change content
jsuser1.email = "nidhi@amazon.com"
Object.freeze(jsuser1)  // ---> value lock kar dete h
jsuser1.email = "nidhi@chatgpt"
console.log(jsuser1[mySym] );

jsuser1.greeting = function(){
    console.log("hello js user");
    
}
console.log(jsuser1.greeting); // undefined



 
