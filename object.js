const myval = [0, 1, 2, 3, 4, 5];

//object literals
const mysym = Symbol("key1"); //custom key
const object = {
  //name rollno etc are the keys
  name: "shiv",
  [mysym]: "mysymbol", //it can be taken as symbol key
  //   mysym: "mysymbol",//it can't be taken as key
  "full name": "siba pradhan",
  rollno: 45,
  mob: 7890987987,
};

object.greeting = function(){
  console.log("hello i am a function");
}
object.greetingtwo = function(){
  console.log(`hello i am ${this.name}`);// in this case we can use also object.[fullname]
}

console.log(object.greeting())

console.log(object.name); //this a type to access the value of object
console.log(object["full name"]); //but in this case it didn't gaves any access
console.log(object["name"]);
console.log(typeof object.mysym); //but it can't be taken as a key it shows string  mysym: "mysymbol", in this case
console.log(object[mysym])// same but can't accessble using .

object["full name"]="laxman"
Object.freeze(object)
object["full name"]="hari"
console.log(object)

const user = {}
user.email= "shiv@gmail"
user.name="shiv"
user["full name"]="siba"
user[mysym]="mysymbol"

console.log(user)

const regularuser = {
  name: "shiv",
  fullname: {
    username: {
      myname: "siba",
      rollno: 55,
    },
    islogin:false
  },
}; //nesting of an object is possible
console.log(regularuser.fullname.username.myname);
console.log(regularuser.fullname?.username.myname); //this ? is used for if a fullname user exist then proceed further this is happens in api's

// Merge of 2 objects
const obj1 = { a: "name", b: 5667 };
const obj2 = { c: "myname", d: 3434 };
const obj4 = { e: "myname", f: 3434 };

// const obj3 = Object.assign({}, obj1, obj2, obj4);// this is the syntax {} if we write this or not it gives same output
// const obj3 = { ...obj1, ...obj2, ...obj4 }; // same thing just using spread operator
console.log(obj3); //it returns 2 objects set in a single object
const obj3 = { obj1,obj2 }
console.log(obj3)//it returns error

const users = [
  {
    id: 1,
    name: "abc",
  },
  {
    id: 2,
    name: "abc",
  },
  {
    id: 3,
    name: "abc",
  },
];
const myuser ={
  name:"shiv",
  rollno:5,
  fullname:"siba",
  isloggedin:false
}
console.log(users[1].id)
console.log(Object.keys(myuser))//this .map(values=>values) also gaves same output
console.log(Object.values(myuser))//this .map(values=>values) also gaves same output
console.log(Object.entries(myuser))

const {isloggedin :logging}=myuser//destructuring of value
console.log(logging)