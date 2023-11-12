const userEmail = "shivank634@gmail.com"

if (userEmail) {           // consider true 
      console.log("Got user email");
} else {
      console.log(" Don't have user email");
}



// Falsy Value:
//      -> false
//      -> 0
//      -> -0
//      -> BigInt
//      -> ""
//      -> null
//      -> undefined
//      -> NaN


//  Truthy Value:
//      -> "0"
//      -> "flase"
//      -> " "
//      -> []
//      -> {}
//      -> function(){}   this is emty function


// Nullish Coalescing Operator (??): null undefined:
let val1;
val1 = 5 ?? 10
console.log(val1)
val1 = null ?? 10
console.log(val1)
val1 = undefined ?? 10
console.log(val1)
val1 = null ?? 10 ?? 20
console.log(val1)


// Terniary Operator:

// condition ? true : false

const q = 100
q <= 50 ? console.log("less than 50") : console.log("more than 50")  