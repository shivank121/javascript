function MyFun(){
      console.log("hello")
      console.log("Shivank")
      console.log("how")
      console.log("are")
      console.log("you")
      console.log("what")
      console.log("are")
      console.log("you")
      console.log("doing")
}
MyFun()


function Addition(num1 , num2){
      console.log(num1 + num2)
}
Addition(2,"5")



function Sub(num1, num2){
      let result = num1 - num2
      return result
}
const result =  Sub(6,4)
console.log(result)



function Multiply(num1, num2){
      return num1 * num2
}
const result2 =  Multiply(6,4)
console.log(result2)


function loginUserMessage(username){
      // if(username === undefined){
      //       console.log("plese enter user name")
      //       return
      // }
      // OR
      if(!username){
            console.log("plese enter user name")
            return
      }
      return `${username} just lodded in`
}
console.log(loginUserMessage("shivank"))
// console.log(loginUserMessage()) // will give undifine if nothing paased




// pass default value to function parameter

function user(username="shivank"){
      if(!username){
            console.log("plese enter user name")
            return
      }
      return `${username} just logged in`
}
console.log(user())







//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//rest operator
function calculateCartPrice(...num1){   
      return num1
}
console.log(calculateCartPrice(12,13,14,15,16,17,18,19))


// Pass Object into function

const hii = {
      username:"shivank",
      price:199
}


function handleObject(anyObject){
      console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(hii)

// pass object directly
handleObject({
      username:"shivank",
      price:199
})



// Pass Array into function
const arr = [200,400,500,12,45,253,4,36,5747,]

function handleArray(getArray){
      return getArray[1]
}
console.log(handleArray(arr))