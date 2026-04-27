/* foreach loop */

const coding =["js", "python", "c++", "c"]
coding.forEach(  function (item) {  // forEach ke nader call back function dena hota, jiska naam nhi hota h isliye naam hata diya h
console.log(item);
})




/* ARROW function bhi use kar sakte h  */
const fruit =[ "apple", "mango", "banana", "cherry"]
fruit.forEach( (val) => {
    console.log(val);
})




////---->>

//array ke ander objects define kare h or ek ek value access kari h humne
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )