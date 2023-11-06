//                                                     ____________________ IIFE _____________________

console.log("**************************************** Immediately Invoked Function Expressions ***************************************************");

// privent from globle scope polution use IIFE and immediately execute

                           // Syntax of IIFE

// normal function
(function chai() {                  // ->  this is named IIFE
      console.log(`DB Connected`);
})();                                       //  -> this ";" use for end 



// arrow function
( () => {                           // -> this is unnamed IIFE                               
      console.log("hii")
})();



// pass parameter
( (name) => {
      console.log(`name is ${name}`)
})("shivank");




// NOTE :
//     ->  End of line is importent other wise though error. this is done by using semicolam ";"