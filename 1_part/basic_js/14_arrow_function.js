// Dependence => Object -> This -> function

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Object -> This -> function %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

const user = {
      username:"shivank singh",
      price:"999",

      welcomeMessage: function(){
            console.log(`${this.username} , welcome to website`)   // -> "this" keyword is used to reffer current context of object
            console.log(this) // -> this show current object
      }

}

// user.welcomeMessage()
user.username = "ankit bhai"
user.welcomeMessage()




console.log(this)   // -> will give you emty object because this is out side of node invireonment (function)




function one(){
      console.log(this)
      let username = "shivank singh"

      console.log(this.username) // this will give "undefine" becase use only within object
}
one()


console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Arrow Function %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

const add = (num1, num2) =>{
      return num1 + num2
}
console.log(`add-> ${add(1,2)}`)

const Multiply = (num1, num2) => num1 * num2 
console.log(`Multiply ->  ${Multiply(2,2)}`)

const sub = (num1, num2) =>( num1 + num2 )
console.log(` sub -> ${sub(4,3)}`)

const obj = (num1, num2) => ({username : "shivank singh"})   // not under stand (doubt)
console.log(`sub ->  ${ obj(1,2) }`)