


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
console.log(newMarks);   // <--- NaN, ->> qki marks me xyz letters bhi aarhe the, which isn't valid

// if null==> 0;
// if undefined ==> NaN


console.log(typeof NaN); 
// output 👉 "number"

console.log(0 / 0);        // NaN
console.log("abc" * 2);    // NaN

console.log(NaN === NaN); 
// false ❌


console.log(isNaN(NaN));        // true
console.log(Number.isNaN(NaN)); // true (best 👍)

/* Examples of NaN :
    0 / 0        // NaN
Infinity - Infinity // NaN
"abc" * 2    // NaN
"hello" - 5  // NaN
Number("abc")   // NaN
parseInt("xyz") // NaN    ----> parseInt dataype h ji string se INTEGER nikalte ha

*/


// if true ==> 1 (same for opposite)
// if false ==> 0 (same for opposite)
// if --> "33" ==> 33
// if "" ==> false



/* one more another twist (cnverting string -->>  number)*/
let someNumber = 45
let newNumber= String(someNumber)
console.log(typeof someNumber);  // number
console.log(newNumber);
console.log(typeof newNumber);   // --> string











/*   ------------>  OPERATIONS   <----------------*/

let digit = 20;
let negValue = -digit;
console.log(negValue);    // -20 will be the answer


// number to number every operation easily ho jaega normal maths
console.log(3-3);   //0
console.log(3+3);   //6
console.log(3*5);   //15
console.log(2**2);   //  4  power aajaega



//--->>>>addition of atrings
let str1= "Nidhi"
let str2= " Rajput"

let str3 = str1 + str2;
console.log(str3);      // Nidhi Rajput



// Addition operation between string and number.
console.log("3" + 2);     //32
console.log(typeof("3" + 2));   // string


console.log(3 + "2");     //32
console.log(typeof(3 + "2"));  //string

console.log("3" + 2 + 3); //323    <--- 1st term string
console.log(typeof ("3" + 2 + 3)); //string

console.log(3 + "2" + 3)  //323    <---- 2nd term string
console.log(typeof(3 + "2" + 3)) //string

console.log(3 + 2 + "2")   //52  <--- 3rd term string (special case)[starting ke 2 add hue h phle]
console.log(typeof (3 + 2 + "2")) //  ---> String


//Subtraction operation between string and numbers, string as a nuber treat hota h
console.log(15 - 5 - "2");  //8  (string bhi as a number treat hua h [-ve] case me)
console.log(typeof(15 - 5 - "2"));  // number

console.log("5" -2);  // 3
console.log(typeof("5" - 2));       // number

console.log(8 -"5" -2); //  1
console.log(typeof (8 -"5" - 2));    // number


/* (+) Operation between  string and number-->  output datatype [ always String]. 
   (-) Operation between  string and number-->  output datatype [ always Number]..
   but     
   console.log("abc" - 2); // NaN 
*/ 



// some trickyyy (but kharab approaches)
console.log(true);// true

console.log(+true);  //1
console.log(+"");    //0

console.log(typeof (3 + 2 + "2")) //string














