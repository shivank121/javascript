// filter method
const nums = [1,2,3,4,5,6,7,8,9,10];

 // in one line
const result = nums.filter((value, number, index)=> value > 5) 
// console.log(result)

// in multile line
const finalReslt = nums.filter((value)=>{
    return value > 5;
})
console.log(finalReslt)


// filter on array of objects
const books = [
    {title:"Book 1", genre:"History", publish:1991, edition:1918},
    {title:"Book 2", genre:"History", publish:1992, edition:1989},
    {title:"Book 3", genre:"Finence", publish:1993, edition:1995},
    {title:"Book 4", genre:"Physics", publish:1993, edition:1996},
    {title:"Book 5", genre:"English", publish:1993, edition:1997},
    {title:"Book 6", genre:"Maths", publish:1996, edition:1998},
    {title:"Book 6", genre:"Maths", publish:1997, edition:1999},
    {title:"Book 7", genre:"Commerce", publish:1998, edition:1991},
    {title:"Book 8", genre:"Commerce", publish:1993, edition:1988},
    {title:"Book 9", genre:"Commerce", publish:1913, edition:1977},
    {title:"Book 10", genre:"Maths", publish:1916, edition:1990},
    {title:"Book 11", genre:"English", publish:1918, edition:1991},
    {title:"Book 12", genre:"Physics", publish:1988, edition:1965},
    {title:"Book 13", genre:"Finence", publish:1999, edition:1999},
]

const bookResult = books.filter((allBooks)=> allBooks.genre === "Finence");
// console.log(bookResult) 

const bookPublishResult = books.filter((allBooks)=> { 
    return allBooks.publish > 1993 &&  allBooks.genre === "Commerce" 
});
console.log(bookPublishResult) 

// Note:
// -> filter return array
// -> 


// __________________________________________________________________________________________________________//


// map method:
const yourNums = [1,2,3,4,5,6,7,8,9,10]
const yourResult = yourNums.map((values)=> values + 10);
console.log(yourResult)


// method chaining 
const ans = yourNums.map((value)=> value * 10).map((value)=> value + 1).filter((value)=> value > 60)
console.log(ans)


// reduce method:

const valueForReduce = [1,2,3];
const reduceResult = valueForReduce.reduce((acc, currValue) =>{
    console.log(`acc value ${acc} and currValue ${currValue}`)        
    return acc + currValue
}, 0) // 0 <- is initial value

console.log(reduceResult)

// Note:
// -> reduce take to parameter 1> accumulater , 2> currecntValue 
// -> first time accumulater initial value 
