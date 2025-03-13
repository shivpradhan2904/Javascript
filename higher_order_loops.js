// foreach loop

const arr = [
  {
    langname: "ruby",
    filename: "rb",
  },
  {
    langname: "javascript",
    filename: "js",
  },
  {
    langname: "python",
    filename: "py",
  },
];

arr.forEach((item)=>{
    console.log(item.langname)
    console.log(item.filename)
})

for (const key in arr) {
    console.log(arr[key])
}

let heros = ["ironman", "superman", "spiderman", "shaktiman"];

//foreach arrow function
//in this loops have 1st item then index then array access mostly we use the item and index
heros.forEach((item, index, array) => {
  console.log(item, index, array);
});

//giving a reference to a function
function print(item){ 
    console.log(item)
}
heros.forEach(print)

//foreach normal function
heros.forEach(function (item) {
    console.log(item)
});

const language = {
  js: "javascript",
  jv: "java",
  py: "python",
  cpp: "c++",
  rb: "ruby",
};

for (const key in language) {//[key,value] this means destructuring the object into array
    console.log(`key is ${key} value is ${language[key]}`)
}

//maps are not iteratable for forin loop
const map = new Map(); //maps are known for always unique value
map.set("IN", "india"); //this didn't makes any effect
map.set("IN", "india");
map.set("EN", "england");
map.set("PK", "pakistan");

//not iterable for forin loop
for (const key in map) {
    console.log(key)
}

//for of loop is not iteratble for objects thats why we use forin
for (const element of obj) {
    console.log(element)
}

for (const [key, value] of map) {
  //[key,value] destructures the array
  console.log(key, ":-", value);
}
