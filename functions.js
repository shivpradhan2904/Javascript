function myfun(...val){//it is rest operator which is passed in function
    return val
}
console.log(myfun(90,89,67))


function myfun2(val1,val2,...val){//it is rest operator which is passed in function
    return val1// in this case 90 go to val1 or 89 go to val2 remaining entered in the val which is an array and it returns
}
console.log(myfun2(90,89,67,55,87,66))

const myuser={
    name:"shiv",
    rollno:79
}
function myfunk(obj){
    console.log(`my name is ${obj.name} and rollno is ${obj.rollno}`)
}
myfunk(myuser)
myfunk({
    name:"RAHUL",
    rollno:80
})


const myar=[1,2,3,4,5]
function printarr(arr){
    console.log(arr.map(val=>val*2))
}
printarr(myar)

//types of fuctions styles
console.log(addone(5))//after a function was created we can use it before or after
function addone(num) {
    return num + 1;
}

// console.log(addtwo(6)) // but in this case it could't be avaliable
const addtwo = function(num){//it is the scenario where a variable can hold the function
    return num + 2;
}