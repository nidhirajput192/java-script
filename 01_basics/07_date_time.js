//  DATE
// date ek object h 
// date is calculated in mili seconds itself.

/* Creation of date by new  */
let myDate = new Date()
console.log(myDate.toString());   //  Mon Apr 20 2026 08:37:41 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString());   //  2026-04-20T08:37:41.322Z
console.log(myDate.toLocaleString())  //  4/20/2026, 8:37:41 AM

//js me month 0 se start hote h ---> 0 -> january

let myCreationDate = new Date(2025 , 0, 3)
console.log(myCreationDate.toDateString()); // 0 is taken as jan here, Fri Jan 03 2025


/* Timestamps in javascript  */
let myTimeStamp = Date.now()

// console.log (myTimeStamp);
// console.log(myTimeStamp.getTime());


let newDate = new Date()
console.log(newDate);   

let nidhiDate = new Date();
console.log(nidhiDate);

let todayDate = new Date();
console.log(todayDate);

//date method by (.get) we can access easily

console.log(todayDate.getFullYear());
console.log(todayDate.getTime());




