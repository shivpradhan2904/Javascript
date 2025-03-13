// function sayshiv(){
//     console.log("shiv")
// }
// setTimeout(sayshiv, 2000);
//same thing happens just pass the reference

// setTimeout(() => {
//     console.log("shivvvv")
// }, 2000);
// //in this case of settimeout it works in that given time only once
//but in case of setinterval that happens continuesly within that time

// const change = setTimeout(() => {
//   document.querySelector("h1").innerHTML = "i am a developer";
// }, 3000);

// document.querySelector("#stop").addEventListener("click", function () {
//     clearTimeout(change); //it takes a reference for that reason we have to save the timeout in a varibale
// });

// let run;
// document.getElementById("start").addEventListener("click", function () {
//   run = setInterval(function () {
//     const date = new Date();
//     console.log(date.toLocaleTimeString());
//   }, 1000);
// });

// document.getElementById("stop").addEventListener("click", function () {
//   clearInterval(run);
// });
// setInterval(() => console.log("Runs every second"), 1000);
// console.log("hiiii")

// let arr =[6,2,3,4,5]
// arr.map((val,index)=>console.log(index,val)).

const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#"; // Use 'let' to allow modifications

  // Generate 6 random indices to construct a color
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length); // Get a random index
    color += hex[randomIndex]; // Append the random hex character to the color string
  }

  return color; // Return the constructed hex color
};

let run; //it is called global scope
document.getElementById("start").addEventListener("click", function () {
  //this works either wrap it into a function
  let funk = function () {
    document.querySelector("body").style.backgroundColor = randomcolor();
  };
  if (!run) {//better code
    run = setInterval(funk, 100);
  }

  //   run = setInterval(() => {
  //     document.querySelector("body").style.backgroundColor = randomcolor();
  //   }, 100);
});
document.getElementById("stop").addEventListener("click", function () {
  clearInterval(run);
  run = null; // instead of doing this white background we can make this
  //   document.querySelector("body").style.backgroundColor = "white";
});
