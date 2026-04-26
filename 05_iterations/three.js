/*    FOR OF loop   

//--> Jaise hum array ke ander strings daalte h like
["", "", ""]

//---> ese hi hum array ke ander objects bhi daalte h like
[{}, {}, {}]

*/

const arr = [1,2,3,4]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(greet)
    
}



//MAPS  ->> array jaise hi hote hain, Map ek built-in object (data structure) hai
// Isme hum key-value pairs store karte hain
// Bilkul object {} jaisa… but zyada powerful

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of India")
map.set('Fr', "France")

for (const key of map) { // --> agar yaha simple key likha rehne denge to output kuch esa hoga likhe neeche likha h...
    /*  [ 'IN', 'India' ]
[ 'USA', 'United states of India' ]
[ 'Fr', 'France' ]  */
  console.log(key);
}

// but agrar key ki jagha esa karenge like neeche likha ha to like///
for (const [key,value] of map) {
    console.log(key, `:-`, value); //isme array jaise form me print nhi hua hoga
    
}


// objects pr map laga sakte hain.....
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);    //TypeError: myObject is not iterable
    
// }
    

   
    
