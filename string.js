let str="shiv"
let str1="pradhan"
console.log(str.concat(str1))
console.log(str+ str1)
console.log(1+2)
console.log("1"+2)
console.log(1+"2")
console.log(1+2+"2")//if the operations performs in first then it performs either all are string
console.log("1"+2+2)
console.log(1+"2"+2)

let name = "shiv"
let name1 = name
name1="ram"
console.log(name1)
console.log(name)
//in this case it gives copy so it while reassigning time so if we change any thing in the 2nd one then we added value to the copy object not the original

//in this case both are pointing same object
let user ={
    email:"i@gmail.com",
    name: "siva"
}
let user1=user
user1.email="myemail.com"
console.log(user1)
console.log(user)

console.log(`hello my name is ${name1}`)


let arr=[1,2,3,4]
let val = arr.splice(1,2)
console.log(val.toString())


const myname="  herooo i am"
const newa=myname.replace("i am","you are")
console.log(newa)
console.log(myname.trim())
console.log(myname.slice(0,4))
console.log(myname.indexOf('i'))
console.log(myname.repeat(4))
console.log(myname.length)
console.log(myname.toUpperCase())
console.log(myname.at(2))
console.log(myname.charAt(2))

// "" it means single character array
// " " it means each word array
// ",","-" this type it means a single string array
const newstr=newa.split("")
console.log(newstr)

// let num=123
// let reversed=0
// while(num > 0){
//     let rem=num%10
//     reversed=(reversed*10)+rem
//     num=Math.floor( num/10)//in js 123/10 gives 12.3 in java directly interger
// }
// console.log(reversed)