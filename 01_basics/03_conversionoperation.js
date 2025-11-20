let score ="33"
console.log(typeof score);
console.log(typeof (score));  //same hi baat h

let valueInNumber = Number(score);     //jisme convert karna h always start by Capital word(N)
                                       //  score   ---> number data type
console.log(typeof (valueInNumber));



/*----->>>lets take onemore example of this same<<<----------*/
let marks= "123xyz"
console.log(typeof marks);

let newMarks = Number(marks)
console.log(typeof newMarks);  // type -->number
console.log(newMarks);   // <--- NaN qki marks me xyz letters bhi aarhe the, which isn't valid

// if null==> 0;
// if undefined ==> NaN
// if true ==> 1 (same for opposite)
// if false ==> 0 (same for opposite)
// if --> "33" ==> 33
// if "" ==> false



/* one more another twist (cnverting string -->>  number)*/
let someNumber = 45
let newNumber= String(someNumber)
console.log(typeof someNumber);
console.log(newNumber);
console.log(typeof newNumber);   // --> string



