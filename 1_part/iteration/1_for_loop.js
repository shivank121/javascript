// FOR LOOP:

for(let index = 0 ; index <=10 ; index++){
      const element = index;
      if(element === 5){
        // console.log("5 is best number")
      }
    //   console.log(element)
}



// Nested loop:
console.log(" Nested loop: ")

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i} `)
    console.log(`Table of  ${i} `)

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop ${j}`) 
        console.log(`${i} X ${j} =  ${i*j} `)       
    }    
}



// FOR Loop On Array:

console.log("FOR LOOP ON ARRAY :")

const myArray = ["shivank", "prashant", "shivam", "satyam", "aman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}




// => KeyWord -> 'break and "continue" :

console.log(" => KeyWord -> 'break and 'continue' :")

for (let index = 0; index < 20; index++) {
    
    if(index === 5){
        console.log("Detected 5")
        break                        // break flow of loop 
    }
    console.log(`Value of i index is ${index}`)
}
for (let index = 0; index < 20; index++) {
    
    if(index === 5){
        console.log("Detected 5")
        continue                      // skip only one pont of  flow of loop 
    }
    console.log(`Value of i index is ${index}`)
}