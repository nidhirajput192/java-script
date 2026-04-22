/* DECLERATION OF OBJECTS, Following both representations are same exactly an empty object. */
const instaUser = new Object()    //  empty object
//const instaUser = {};           //   empty object
console.log(instaUser);   //   {}



instaUser.id ="123abc";
instaUser.name= "nidhi";
instaUser.isLoggedIn = false;
console.log(instaUser);


//-----> other example with new things..  nested object hi kehdete h
const regularUser = {
    email : "nidhi@gmail.com",
    fullname  : {
        userFullname :{
            firstName : "nidhi",
        lastName :" Rajput"
        }
        
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullname.lastName) ; // Rajput


//-------> combinning...

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4: "d"}
const obj4 = {6:"c", 5: "d"}
//const obj3 = obj1 + obj2;  // wrong way
//const obj3 ={obj1, obj2}; ///isse to object ke ander object ho jaega

//---> METHOD:1-> new syntax way to access the obj3.....
//const obj3 = Object.assign({}, obj1, obj2, obj4); // O will be capital in Object 

//---> METHOD : 2--> spread method
const obj3 = {...obj1, ...obj2}  //best
console.log(obj3);


/*ARRAY OF OBJECTS --> multiple object in a array */

const users = [
    {
        name: "nidhi",
        email: "niddhi@gmail.com"
    } ,
    {
        name: "rikki",
        email: "ruhi@gmail.com"

    },
    {

    },
    {

    },
]
users[2].email
console.log(instaUser);
// users[1].name;
// console.log(users);


/* TO GET THE KEYS OR VAlUE */
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));


/* TO CHECK THAT HAVEING SUCH PROPERTY OR NOT */
console.log(instaUser.hasOwnProperty('isLoggedIn')); // true






