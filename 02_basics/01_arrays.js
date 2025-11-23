//arrays
// always written hi square brackets
// array object h, contain many element in a single variables(collectipn of multiple elment)
// resizeable array in js
// mix of data types or array into array
// indexing start from 0 index

//copy operation in array give always ->>> shallow copy banata h ->> whose property share a same reference point means jo bhi change hoga wo original array me bhi change hoga 

const myArr = [1, 2, 3, 4, 5, 6, 7, "nidhi"]
const heros =["shaktima", "naagraj"]

const myArr2= new Array(1,2,3,4,5,6,)
//console.log(myArr[0]);
//console.log(heros[2]);


// array methods

// 1- push

myArr.push(10)
console.log(myArr);

// 2- pop()

// 3- unshift(element)  -> array ke statring me element add ho jaega
// 4 - shift()  -> starting elemet remove ho jaata h 
// 5 - 