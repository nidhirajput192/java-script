//  DATE
// date ek object h 
// date is calculated in mili seconds itself.


let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString())

//js me month 0 se start hote h ---> 0 -> january

let myCreationDate = new Date(2025 , 0, 3)
console.log(myCreationDate.toDateString()); // 0 is taken as jan here

