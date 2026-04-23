const user = {
    username: "nidhi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()   // nidhi , welcome to website
user.username = "sam"
user.welcomeMessage()   // sam, welcome to website

 //console.log(this);   // {}  ---> empty object milta h khaali this se



 /* ARROW FUNCTION */
 //---->>
const chai = () => {
    let username ="nidhi"
    console.log(this.username)    // undefined
}
chai()


//--->>
const code = () => {
    let username ="nidhi"
    console.log(this)    //  {}   
}
code()



/* ARROW FUNCTION SYNTAX */
//() => {}




// holded in a variable
/*const addTwo =(num1, num2) => {
    return num1 + num2
}
console.log(addTwo(9,1))  // 10         */



//-->> one more way two write the above same code, (implecit return method)
const addTwo =(num1, num2) =>   num1 + num2
//const addTwo =(num1, num2) =>   (num1 + num2);  // same baat h ye uper wale ki trha 

console.log(addTwo(9,1))    // 10


// OBJECTS KO RETURN KARNE K LIYE USKO PARENTHESIS ME RAP KARNA HI PADEGA
 //----> const addTwo =(num1 , num2) => ({username:"nidhi"})

