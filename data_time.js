const mydate =new Date()
console.log(mydate.toString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toTimeString())
console.log(typeof mydate)

// const date = new Date("01-01-2024")//months are starts from 0 to 11 = 12
console.log(date.toString())
console.log(date.toLocaleDateString())
console.log(date.toTimeString())
console.log(Date.now()/1000)//for knowing exact timeing

const date = new Date()
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.toTimeString())
console.log(`the time was ${date.toTimeString()}`)
console.log(`the time was ${date.toDateString()}`)