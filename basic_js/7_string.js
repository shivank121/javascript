let name = "shivank singh"; // this First way to declare string 
const count = 50

console.log(name + count + " value")  // this is not good way and complex to implement

// Using 'Back tick' -> (`  `)
console.log(`hello my name is ${name} and my age is ${count} thank you`) // this is good way and easy ti implement



let name1 = new String('prasant singh') // this Second way to declare string
console.log(name1)
console.log(name1[0])  // using Index number access value
console.log(name1.length)  // using .length method we know length of variablex
console.log(name1.toUpperCase())  // using '.toUpperCase() method' convert lowerCase to upperCase
console.log(name1.indexOf("t"))  // using this method we fined on which position "t" is present


name2 = name1.substring(0,4)
console.log(name2)

name3 = name1.slice(-5, 5) // this is not good becose this method is not allow to give negative value at first position
console.log(name3)



// Remove exta spaces using Trim() method
let email = "  shivanksingh634@gmail.com   ";
console.log(email.trim())

// Replace(' ', ' ')  method
const url =  "https://shivank.com/shivankshingh"
console.log(url.replace('https', '_')) // uisng this method we can repalce any valur from any value


// Include() method
console.log(url.includes('shivank')) // using this method check any value present in string if present will give "true" otherwise will give "false"



// Conversion of String to Array
let className = "1st 2nd 3rd" 

console.log(className.split()) // all value are store in  array in this form [' ']