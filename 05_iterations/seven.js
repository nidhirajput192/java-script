

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers.map((num) => num + 10)
//    console.log(newNumers); // its will serve error

/* Chaining method --> multiple map means map me map */

const newNums2 = myNumers
.map((num) => num*10)
.map((num) => num +1)

console.log(newNums2);