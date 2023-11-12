let score = "33"
console.log(typeof(score)) 

let valueInNumber = Number(score) // conversion 
console.log(typeof valueInNumber)

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);  // converstion from number to boolean
console.log(typeof booleanIsLoggedIn)


// note
//    -> "33" => 33
//    -> "33abc" => NaN
//    -> "true" => 1
//    -> "false" => 0






// **************************************** Operations ****************************************

let value = 5
let nagValue = -value // trick to convert opsitive value to negative value
console.log(nagValue)

let str1 = "Hello"
let str2 = " Shivank"
let str3 = str1 + str2
console.log(str3)


// IMPORTANT OPERATIONS

console.log(2 + 2)
console.log("2" + 2)
console.log(2 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2) // if first value in string than all remaining value consider as string 
console.log(1 + 2 + "2") 




// TRICKY CONVERSION

console.log(true) // give output true
console.log(+true) // not good habits but give output 1
console.log(+"") // will give output 0