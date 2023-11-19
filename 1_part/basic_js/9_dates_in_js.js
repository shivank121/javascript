let myDate = new Date()
console.log(`toString ->  ${myDate.toString()} `)
console.log(`toDataString -> ${myDate.toDateString()}`)
console.log(`toJSON -> ${myDate.toJSON()}`)
console.log(`toLocaleDateString -> ${myDate.toLocaleDateString()}`)
console.log(`toLocaleTimeString-> ${myDate.toLocaleTimeString()}`)
console.log(`toTimeString -> ${myDate.toTimeString()}`)
console.log(`Type of date ->  ${typeof(myDate)} `) // Type of date


// ************* Accece Month, Years & Date directoly *************
let currDate = new Date()

console.log(currDate.getDate())
console.log(currDate.getMonth())
console.log(currDate.getFullYear())


// ********* Create date according to your need *********

let createdDate = new Date(2023, 5, 14) // in js month start from 0 to 11 
console.log(createdDate.toDateString())

let createdDate1 = new Date("2023-01-14") // YY-MM-DD from 
console.log(createdDate1.toLocaleDateString())

let createdDate2 = new Date("01-14-2023") // DD-MM-YY
console.log(createdDate2.toLocaleString())



//Milisecond -> second -> minute -> days -> weeks -> months -> years
let timeStamp = Date.now()
console.log(`timeStamp -> ${timeStamp}`)

let second = Math.round(timeStamp/1000)  //for milisecond to second divided by 1000
console.log(`second -> ${second}`)

let minute = Math.round(second/60)
console.log(`minute -> ${minute}`)

let hours = Math.round(minute/60) 
console.log(`hours -> ${hours}`)

let day = Math.round(hours/24)
console.log(`days -> ${day}`)

let weeks = Math.round(day/7);
console.log(`week -> ${weeks}`)

// let month = Math.round(weeks/)
