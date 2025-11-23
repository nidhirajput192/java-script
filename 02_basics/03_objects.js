/*  objects are decleared in 2 ways
1--> literal
2--> constructor

-->> Singleton--> literal ki trha decleAR karenge to singleton nhi
      banta h
-->>  constructor se banega to hmesha singleton banega   

 */



/*  ek symbol ko declear karke usko symbol ki trha print karana h */

//object literals
const jsuser ={}  //empty object

const mySym = Symbol("key1")

const jsuser1 = {
    name: "nidhi",
    "full name" : " nidhi rajput", //  -> how to access?? impossible by dot, then how???, to bracket me double commas se 
    age : 18,
    [mySym]: " mykey1",
    location : "nagina",
    email: "nidhi@google.com",
    isLoggedinDays :false,

}

//acessing methods
console.log(jsuser1.email);
console.log(jsuser1["email"]);
console.log(jsuser1["full name"]);
console.log(jsuser1[mySym]);


//to change content
jsuser1.email = "nidhi@amazon.com"
Object.freeze(jsuser1)
jsuser1.email = "nidhi@chatgpt"
console.log(jsuser1[mySym] );

jsuser1.greeting = function(){
    console.log("hello js user");
    
}



 
