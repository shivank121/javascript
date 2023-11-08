
if(true){                         // --->  Compair any thing If "True" Block of code execute
      console.log("hello Shivank singh")
}



const balance = 1000

if (balance < 500) {
      console.log("less than 500")
} 
else if(balance < 400) {
      console.log("less than 400")
}
else if(balance < 300) {
      console.log("less than 300")
}
else if(balance < 200) {
      console.log("less than 200")
}
else{
      console.log("more than 500");
}




const userLoggedIn = true
const debitCard = false

if (userLoggedIn && debitCard) {
      console.log("allow to nuy course");
} else {
      console.log("not allow to nuy course");
}

// Check Object is Empty

const emtyObj = {}

if(Object.keys(emtyObj).length===0){       // access all keys of though this ( Object.keys(object_name) )
      console.log("object is errr")
}