// const obj={
//     username:"shiv",
//     email:"xyz@123",
//     getdetails: function(){
//         console.log(this.username)//this points to that obj means current context
//         console.log(this)//this prints the entire object
//     }
// }
// function get(username,email){
//     // myname=username//instead of this we can use this keyword
//     this.username=username
//     this.email=email
//     return this
// }
// console.log(get("shiv","qwe@gmail"))

function setname(username) {
  this.username = username;
}
function createuser(username, email, password) {
  setname.call(this, username);//this refers to the context of the setname
  this.email = email;
  this.password = password;
}

const user = new createuser("shiv","@gmail.com","abcde")
console.log(user)