/*  for loop    */

 for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
  
 }



 for(let i=0; i <= 10 ; i++) {
   console.log(`outer loop value: ${i}`);
   for( let j =0; j<= 10; j++){
      console.log(`inner loop value: ${j}`)
   }
 } 





//------>>

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);

}




console.log("****************************************************")
/* BREAK AND CONTINUE */
 // --->>> BREAK

 for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break  //---> ab condition detect ho ajega and aage nhi chalega loop
    }
   console.log(`Value of i is ${index}`);
    
}


//CONTINUE
for (let index2 = 0; index2 < 20; index2++) {
   if (index2 == 5){
      console.log(` dectected ${index2}`)
      continue
   }
   console.log(`value of i is ${index2}`)
   
}