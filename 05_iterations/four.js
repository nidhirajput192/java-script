/* forof loop objects ke liye work nhi kar rha tha, maps pr kar rha tha, pr objects pr nhi kar rha tha */
 // --> so we will use--->>    forin loop

 const myObject= {
    js:"javascript",
    cpp: "c++",
    rb :"ruby",
    swift: "swift by apple"
 }

 /* for (const key in myObject) {
   console.log(key);   // keys will be the output
    
 } */

   for (const key in myObject) {
    console.log(myObject[key]);  // siise saari value aa jengi
    
   }




/*  is forin loop used in array also??? ley us check by running it  */

const myArray =[ 'js', 'c', 'çpp', 'java', 'python']
for (const key in myArray) {
   // console.log(key);  // output : 0 1 2 3 4
   console.log(myArray[key])
   //ye hoga output seedha naam aajenge ese hi 
                             // js
                              //  c
                              //  çpp
                              //  java
                              //  python
    
}


/*  
 Map pr forin loop nhi lagaya ja sakta h, qki map iteratable nhi h,
but method h  wwo hum aage jakar padhenge...
les see by an example
 */


const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of India")
map.set('Fr', "France")
 for (const key in map) {   
 console.log(key)
 
 }

  /*
    koi error nhi aayi h, but kuch output me bhi nhi aa rha h , qki 
  map iterable nhi hote h
   */