// Question-1  Sum of all netural numbers from 1 to n

const n = 5;  // netural numbers
let sum = 0;  // final result will store in sum

// Loop for increment of number from 1 to n : Method 1
for(let init = 0 ; init <= n; init++){
    sum += init
}

// Method 2:
// sum =  sum*(sum+1)/2



console.log("sum of n numbers -->",sum)