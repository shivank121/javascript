//  FOR OF LOOP:
console.log("=> FOOR OF LOOP")

// ["", "", "", "", "" ]        
// [{}, {}, {}, {}, {} ]

const arr = [1,2,3,4,5,6]

for (const value of arr) {
    // console.log(value)
}


const greeting = "Hello World"
for (const charecter of greeting) {
    // console.log(charecter);
}




// => MAP :

console.log(" => MAP :")

const map = new Map()
map.set('IN', "India")
map.set('USA', "Unitated State of America")
map.set('Fr', "France")

// console.log(map)


for (const [key, value] of map) {          // destructure object using [key ,value ]
    console.log(key + ' : ' + value)
}





// FOR OF ON OBJECT:

const obj = {
    name:"shivank",
    address:"abc",
    age:123
}

// for(const [key , value] of obj){                     
//     console.log(`${key} : ${value}`)
// }




// => FOR In LOOP:





// For each loop:
const coding = [ 'js','cpp','java','python', 'php',]

coding.forEach((items) => {
    console.log(items)
})