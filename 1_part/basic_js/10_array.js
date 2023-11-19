// Fist way to declare Array
const num = [0,1,2,3,4,5,6];
const name = ["shivank","vivek","rishu"]
console.log(num)
console.log(name)


// Second way to declare Array
const myArr = new Array(1,2,3,4,5)
console.log(myArr)

// Array store second array in side existing array
const marvel_hero = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_hero.push(dc_heros)
console.log(marvel_hero) // -> Array can soter any thing

// ****** Method Of Array ******

// push() method     ->  Add items at the end of array
const a = ["hello"]
a.push("Shivank" , "Vivek" , "1", "2")
console.log(a)


//pop() method  -> Removes the last element from an array
const b = ["hello", "Shivank", "Singh", "how", "are", "you"]
b.pop()
console.log(b)


// unshift() method  -> Inserts new elements at the start of an array
const c = [1,2,3,4,5,6,7]
c.unshift(0)
console.log(c)


// shift() method  -> Removes the first element from an array 
const d = [1,2,3,4,5,6,7,8,9]
d.shift()
console.log(d)

// concat() method ->Additional arrays and/or items to add to the end of the array. Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const z = ["hello", "Shivank", "Singh", "how", "are", "you"]
console.log(z.concat(c,d))


//sprade operators 
const y = [...d, ...z]
console.log(y)


// flat() method ->Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
const l = [1,2,3,4,5,[7,6,5,4],[5,67,43245,34,665,57,[35,65,767,86]]]
const real_l = l.flat(Infinity)
console.log(real_l)


// conversion from any data type to array 
console.log(Array.from("Shivank singh"))
console.log(Array.from({name:"shivank"})) // Intresting case

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1,num2,num3))




// ********** Question Methods of Array **********

const e = [1,2,3,4,5,6,7,8,9]
console.log(e.includes(6))  // include() method
console.log(e.indexOf(6)) // indexof() method


// join() methods -> Adds all the elements of an array into a string, separated by the specified separator string.
const f = ["hello", "Shivank", "Singh", "how", "are", "you"]
console.log(f.join())

// slice() method
const g = ["hello", "Shivank", "Singh", "how", "are", "you"]
let h = g.slice(1,4)
console.log(h)

// splice() method
const k = ["hello", "Shivank", "Singh", "how", "are", "you"]
console.log(k)
let i = k.splice(1,3)
console.log(i)