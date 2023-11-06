console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Scope $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
let a = 10
const b =20
var c = 30

// console.log(`this is a -> ${a}`)
// console.log(`this is b -> ${b}`)
// console.log(`this is c -> ${c}`)


// {   }  -> this is scope
if(true){
      let e = 10   
      const f =20
      var g = 30
}
// console.log(e)  // -> not access outside of bracket 
// console.log(f)  // -> not access outside of bracket 
// console.log(`This is g -> ${g}`) // -> "var" is not block level variable accece from anywhere within whole program




console.log("$$$$$$$$$$$$$$$$$$$$$ Nested Scope & Closer $$$$$$$$$$$$$$$$$$$$$$$$")

function one(){
      const username = "shivank"

      function tow(){                                     
            const website = "youtub"
            // console.log(`This is "username" of function one() -> ${username}`) // -> Child function access variable of parent function
      }
      // console.log(`This is "website" of tow() function -> ${website} `)  // -> Not able to access website variable outside of function (reason behind this is scope)
      tow()  
}
one()



console.log("+++++++++++++++++++ Interesting +++++++++++++++++++++++++++")


// This is  Normal funtion.

// addone(5)          -> here call function but not thought any type of error
function addone(num){                               
      return num + 1
}
console.log(`Output of addone() Function -> ${addone(5)}`)




// this is Expretion function

// addTow()                     -> Here call funtion but through error 
const addTow = function(num){
      return num + 2;
}
addTow()