//this is global scope
let a=50 
// var c=90 thats why it was mostly not used

//inside the scope blocked scope 
if(true){
    const a=10
    let b=30
    // var c=50
    // c=50 both are shows came output 
}
//it shows error because a can be used in between the scope not out of scope
// console.log(a)//the value of a is 10 inside the scope only this gives 50 because we used the global one not blocked one
// console.log(c)//it can be possible that's why not all prefer this var datatype


function one(){
    let name="shiv"
    function two(){
        let myname="ram"
        console.log(name)
    }//line by line execaution happens in javascript
    // console.log(myname)//it shows error because we use the myname outside of the blocked scope
    two()
}
one()