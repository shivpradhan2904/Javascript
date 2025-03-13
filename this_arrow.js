const obj={
    username:"shiv",
    age:80,
    printname:function () {
        console.log(`${this.username} is the user`)//this refers the current context
        console.log(this)
    }
}
obj.printname()
obj.username="ram"//changing the current context
obj.printname()//this case the current context was ram 
console.log(this)// this shows an empty object 


//in browser this keyword shows a global object called window object
// function funk(){
//     let username="rahul"
//     console.log(this.username)//this didn't work because this works only in object
//     console.log(this)//this shows many more objects
// }

// const funk = function (){
//     let username="rahul"
//     console.log(this.username)//this didn't work because this works only in object
//     console.log(this)//this shows many more objects
// }
//Both are not working

const funk = () =>{//arrow functions
    let username="rahul"
    console.log(this.username)//this didn't work because this works only in object
    console.log(this)//in arrow function this can't be used
}
// const add =(num1,num2) => { return num1+num2 } return is used in curly brashes
// const add =(num1,num2) => ( num1+num2 )did't need return
const add =(num1,num2) => ({username:"dion"})//how it returns an object
// const add =(num1,num2) => num1+num2
// console.log(add(7,2))