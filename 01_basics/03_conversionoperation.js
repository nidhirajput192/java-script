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





/*   ------------>  OPERATIONS   <----------------*/

let digit = 20;
let negValue = -digit;
console.log(negValue);


console.log(3-3);   //0
console.log(3+3);   //6
console.log(3*5);   //15


//--->>>>addition of atrings

let str1= "Nidhi"
let str2= " Rajput"

let str3 = str1 + str2;
console.log(str3);      // Nidhi Rajput

console.log("3" + 2);     //32
console.log(3 + "2");     //32

console.log("3" + 2 + 3); //323

console.log(3 + 2 + "2")   //52  (special case)[starting ke 2 end hue h phle]
console.log(3 + "2" + 3)  //323

console.log(15 - 5 - "2");  //8  (string bhi as a number treat hua h [-ve] case me)
console.log("5" - 2);       //3
console.log(8 -"5" - 2);    //1



// some trickyyy (but kharab approaches)
console.log(true);// true

console.log(+true);  //1
console.log(+"");    //0














