// const promise = new Promise((resolve, reject) => {
//   //Do an asynk task
//   //DB calls cryptography , network
//   //asynk task means it waits untill that promise was being resolved
//   setTimeout(() => {
//     console.log("i am a task");
//     resolve(); //it is connected with the .then() so it means after this promise was resolved that other functions are worked
//   }, 1000);
// });
// promise.then(function () {
//   console.log("i am promise"); //after the resolve is called or the promise was successfull then this .then function runs
// });

// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("i am task 2");
//     resolve({ usename: "shiv", email: "shiv2@gmail.com" }); //if we pass any value as parameter passed as an object
//   }, 2000);
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// let promise2 = new Promise((resolve, reject) => {
//   let error = false;
//   setTimeout(() => {
//     if (!error) {
//       console.log("i am task 2");
//       resolve({ usename: "shiv", email: "shiv2@gmail.com" }); //if we pass any value as parameter passed as an object
//     } else {
//       //in else cases the reject will work
//       reject("ERROR: SOMETHING WENT WRONG");
//     }
//   }, 1000);
// });

// const username = promise2
//   .then((data) => {
//     console.log(data);
//     return data.usename;//after it returns the usename it have access to the next .then
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err)=> console.log(err))
//   .finally(()=> console.log("promise is either resolved or rejected"))//it executes compulsory

// console.log(username);

// let promise3 = new Promise((resolve, reject) => {
//   let error = false;
//   setTimeout(() => {
//     if (!error) {
//       console.log("i am task 2");
//       resolve({ lang: "javascript", password: "123456" }); //if we pass any value as parameter passed as an object
//     } else {
//       //in else cases the reject will work
//       reject("ERROR: SOMETHING WENT WRONG");
//     }
//   }, 1000);
// });

// instead of this .then we can use this asynk await
//Basically this will very effective when the database connection needed or any error comes
//because of the error will exist instead of the we use try catch block for catchh the error
// because in asynk await they didn't handle errors directly
// async function consumepromise() {
//     try {
//         const response = await promise3;//in this case that data of the resolve will been stored
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumepromise();



//Async await
async function getallusers() {
  //same as the resolve have the data which accessed in the .then() in async function have the await for holding the data
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //in this case the data of a api will be there
    const data = await response.json(); //you have to do also because it also taken time to resolve so before it can be resolved don't give the data
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getallusers();

//using .then or etc
const funk = fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())//it returns a data
  .then((data)=>console.log(data))//after it returns a data then we can use it
  .catch((error)=> console.log(error));

  const mydata = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.data)//axios automatically convert the data into json format
  }