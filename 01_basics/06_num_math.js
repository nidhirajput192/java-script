//  define numbers....
const score = 400
console.log(score);  //---> o/p --> 400

//ab mjhe number hi define karn ah to new use karke kar sakte h
const marks = new Number(100);
console.log(marks);  //o/p ---> [Number:100]

console.log(marks.toString); //--> o/p 100 and type string hoga and all method of string will be applicable
console.log(marks.toFixed(2));

console.log(marks.toPrecision); //to round off the value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000



// MATHS

//maths library by default aati h js me
console.log(Math); //---> object h jisme bht saari properties h
//--> o/p: object [Math] {}


console.log(Math.abs(-4)); //  ( -ve value , +v me ho jati h)
console.log(Math.round); // value ko round of kardenge
console.log(Math.ceil(5.1)); //upper value --> 6
console.log(Math.floor(5.1));  // lower value --> 5
console.log(Math.max(3,8,9));
console.log(Math.min(1,7,9));

console.log(Math.random()); //iski value hmesha 0 & 1 ke beech hi aati h
console.log(Math.random()*10);   //ek value point se shift chali jaegi

console.log(Math.floor(Math.random()*10)+1);

const min =10
const max = 20
console.log(Math.floor(Math.random() * (max- min +1) + min))






