const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)

// convert Number into String Using toString method
const balance1 = balance.toString()
console.log(typeof(balance1))
console.log(`This is length of balance1 variable => ${balance1.length}`)




// toFixed(number) method 
console.log(`After decimal point fix only 1 digits ${balance.toFixed(1)} `)
console.log(`After decimal point fix only 2 digits ${balance.toFixed(2)} `)
console.log(`After decimal point fix only 3 digits ${balance.toFixed(3)} `)
console.log(`After decimal point fix only 4 digits ${balance.toFixed(4)} `)


// toPrecision(num) method
const preNum = 123.8996
console.log(`precice value of ${preNum} is ${preNum.toPrecision(1)}`)


// toLocaleString() method
const money = 1000000000;
console.log(`Conver this ${money} is Indian stander value ${money.toLocaleString("en-IN")}`)


// ***************************** MATHS ***************************** 
//  -> math is javascript library 

console.log(Math)

// Math.abs(-num)
console.log(`conver negative number to positive ${Math.abs(-5)}`)

// Maths.round(num)
console.log(`Round for access aound of value of any value ${Math.round(123.7857)}`)

// Math.ceil(num) 
console.log(`Access aound of value of any value from upper side ${Math.ceil(2.3)}`)

// Math.floor(num)

//Math.pow(num)

//Math.min()
console.log(`Accese lowest value from array ${Math.min(5,6,7,9,1,4,6,3)}`)

//Math.max()
console.log(`Accese highest value from array ${Math.max(5,6,7,9,1,4,6,3)}`)



// Math.random()    -> This is give value between 0 and 1 allways 
console.log(`${Math.random()}`) 

const min = 9999
const max = 1555

const otp = Math.round(Math.random() * (max-min +1 ) + min )
console.log(`This is OTP ${otp}`) 