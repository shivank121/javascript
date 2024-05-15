const coding = ["js","ruby","java","c++","python"]

coding.forEach((items, index , arr) => {    // -> three parameter are in forEach 
      console.log(`${items}`)
} )


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

// use forEach loop on array of object
myCoding.forEach((items, index , arr)=>{   
      console.log(items.name);
})

// => store forEach in variable 
const result = myCoding.forEach((items)=>{    
      console.log(items.name);
})
console.log(result)  



// Note:
// -> forEach loop dose not return any value.
// -> forEach loop take three parameter 1> items, 2> index, 3> arr  