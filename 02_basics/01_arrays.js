/*  -->arrays
always written hi square brackets.
array object h, contain many element in a single variables(collection of multiple elment in a single variables)
resizeable array in js.
mix of data types or array into array [contain string, number, boolean etc]
indexing start from 0 index.

copy operation in array give always ->>> shallow copy banata h ->> whose property share a same reference point means jo bhi change hoga wo original array me bhi change hoga
 */ 


/* DECLERATION OF ARRAY */


// METHOD : 1 --->S  simple
const myArr = [1, 2, 3, 4, 5, 6, 7, "nidhi"]  // array me elements hote h
const heros =["shaktima", "naagraj"]



// METHOD :2 ---> BY new & yaya pr () ye wala dabba use hue h
const myArr2= new Array(1,2,3,4,5,6,)
//console.log(myArr[0]);
//console.log(heros[2]);


// array methods

// 1- push

myArr.push(10)
console.log(myArr);

 /*  2- pop() ----> last element pop out ho jaegaaa.

 3- unshift(element)  -> array ke starting me element add ho jaega
 4 - shift()  -> starting element remove ho jaata h 

 questions methods--->
 includes(element which we have to check whether it is in array or not)-- result will be in true or false
 indexof()
join()->>convert array into string square bracket me nhi aayega

// Method slice, splice    */
console.log("A", myArr);    //  A [ 1, 2, 3, 4, 5, 6, 7, 'nidhi', 10 ]



const myn1 = myArr.slice(1,3)  // -> 3rd index not included , it will print 1st and 2nd indexed element
console.log(myn1); //  [ 2, 3 ] 
console.log("B", myArr);   // B [ 1, 2, 3, 4, 5, 6, 7, 'nidhi', 10 ]


const myn2 = myArr.splice(1,3)  // -->> original array bhi change ho jata h, splice portion cut ho kar array ko change kar jata h 
console.log("C", myArr);
console.log(myn2);    // [ 2, 3, 4 ]
console.log(myArr);   // [ 1, 5, 6, 7, 'nidhi', 10 ]
