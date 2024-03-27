let n = 4567
let sum = 0

// Method - 1
let n_length = n.toString().length
for(let i = 1; i <= n_length; i++ ){

    let separeted_value = n % 10;
       sum = sum + separeted_value;
    n = Math.floor(n / 10)
}
// console.log("final result =>",sum)


// Method - 2
while(n > 0 ){
    let separeted_value = n % 10;
    sum = sum + separeted_value;
    n = Math.floor(n / 10)
}
console.log("final result =>",sum)