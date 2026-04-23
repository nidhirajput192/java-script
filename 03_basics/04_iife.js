/*   Immediately Invoked Function Expressions (IIFE)     */

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();    // semicolonn is imppo between two iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('nidhi')