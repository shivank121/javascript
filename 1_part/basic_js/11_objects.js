// ********* Object Literals *********

const mySym = Symbol("keyofmyname")

const jsUser = {
      name:"shivank",
      "full name":"shivank singh rajput", // this value not accese though objectName.key 
      age:21,
      [mySym]:"abcdefghi", // Used symble within object
      class:"SYBSE-IT",
      address:"Mulund east",
      email:"shivanksingh634@gmail.com",
      isLoggedIn:"false",
      lastLoginDays:["monday","tuesday","saturday"]
}
console.log(jsUser.lastLoginDays) // first way to acces value of object
console.log(jsUser["email"]) // second way to acces value of object
console.log(jsUser["full name"])
console.log(jsUser[mySym]) // accece symble key's value


// ********* Change Object Value ***********

jsUser.email = "hiteshsingh234@gmail.com"
console.log(jsUser["email"])



jsUser.greeting = function(){
      console.log("hello js user")
}
console.log(jsUser.greeting())


jsUser.greetingTow = function(){
      console.log(`Hello js users ${this.name}`)
}
console.log(jsUser.greetingTow())





// *********************************************************

// Object Singleten

const tinderUser = new Object() // ->this is singletene object
// console.log(tinderUser)

tinderUser.id = "12Shiv@"
tinderUser.name = "Shivank"
tinderUser.age = 21
// console.log(tinderUser)
console.log(Object.keys(tinderUser)) // we can accese all keys of any object 
console.log(Object.values(tinderUser)) // we can accese all values of any object 
console.log(Object.entries(tinderUser)) // we can accese all value and key seperated of any object 
console.log(tinderUser.hasOwnProperty('name')) // Determines whether an object has a property with the specified name.


// ** Nested Object

const nested = {
      name:"shivank",
      "last name": "singh",
      qualification:{
            persuing:"SYBSC-IT",
            done:"Frontend development course",
            position:"trainee software engennear",
            "colege":{
                  address:"muliund east",
                  "college name":"VPMRZ Shah College of Art Science and Commerce"
            }
      },

}
// console.log(nested.qualification.colege["college name"])


//Combine two or more than tow objects

const a = {
      first:10,
      second:20,
      thired:30
}
const b = {
      hii : 50,
      byy:60,
      guys:70
}

// Object.assign({}, objName1, objName2, ...)
const c = Object.assign({},a,b)   // fist way 
console.log(c)

const d = {...a, ...b} // second way though sprade operator
console.log(d)



// how value come from database
const users = [
      {
            id:1,
            email:"h@gmail.com"
      },
      {
            id:1,
            email:"h@gmail.com"
      },
      {
            id:1,
            email:"h@gmail.com"
      },
      {
            id:1,
            email:"h@gmail.com"
      }
]

console.log(users[0].email) 


// ***************************************************************************************************


const course = {
      courseName:"Javascript",
      price:999,
      courseInstitute:"JS_Course"
}

const {courseInstitute:instructer, price, courseName} = course    // way of destructuring 

console.log(instructer , price, courseName )






// ********************************** API *****************************************

// JASON
// {
//       "name":"shivank",
//       "course":"js",
//       "class":"sy"

// }