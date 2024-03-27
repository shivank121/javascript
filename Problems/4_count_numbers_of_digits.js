// Question- count the numbers of digits of a numbers
// 34567 = 5

let n = 23456 
let count = 0
do {
    count++
    n = Math.floor(n / 10)
} while (n > 0);

console.log(count);