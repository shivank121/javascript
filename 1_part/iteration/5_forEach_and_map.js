const coding = ["js","ruby","java","c++"]

coding.forEach( (value) => {
      // console.log(`${value}`)
} )


function printme(items){
      // console.log(items);
}

coding.forEach( printme ) // pass function as referance 




coding.forEach( (items, index , arr)=>{       // -> three parameter are in forEach 
      // console.log(items,  index, arr )
}) 



// => This is Array of Object
const myCoding = [
      {
            name:"javaScript",
            fileName:"hii",

      },
      {
            name:"java",
            fileName:"byy",

      },
      {
            name:"c++",
            fileName:"gys",

      },
      {
            name:"python",
            fileName:"abc",

      },

]

myCoding.forEach((items)=>{     // -> access value of array of object through forEach loop 
      // console.log(items.name);
})




// => store forEach in variable 
const result = myCoding.forEach((items)=>{    
      // console.log(items.name);
})

console.log(result)  // -> will give only undefined 