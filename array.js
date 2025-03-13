let arr = ["shiv", "ram", "laxman", "pradeep","hari"];
// let ar=[0,1,2,3,4,5]
// console.log(ar.reverse())//reverse of an array
// console.log(arr.pop()); // Removes "pradeep", Output: "pradeep"
// arr.push("sita")
// console.log(arr)
// arr.shift()//removes 1st element
// console.log(arr)
// arr.unshift("shiv")//adds in 1st
// console.log(arr)
// console.log(arr.includes("ram"))//same as in number
// console.log(ar.indexOf(4))//at this time if i put arr. then it returns -1 because arr is a string array
// console.log(arr.join())//basically it returns a string after join an array

// slice or splice
console.log(arr.slice(0,2))
console.log("A",arr)//slice didn't change the array and it didn't include the end index like in this case is 0 to 2 it didn't includes 2

console.log(arr.splice(1,3))//in case of this it cut the array and chnages the array and it includes the last part like in this case 3
console.log("B",arr)
// console.log(arr.reduce())

// let str = "shiv";
// const herooo = ["shaktiman", "krish", "Hanuman"];
// const dc_hero = ["spiderman", "superman", "batman"];
// herooo.push(dc_hero); //dc_hero can be taken as a single array so the array size will be 4
// console.log(herooo); // it gives this output ['shaktiman','krish','Hanuman',[ 'spiderman', 'superman', 'batman']]

// const allhero = herooo.concat(dc_hero); //in this case before concate the value of herooo is theprevious array so to fix that arr we can use flat(Infinity)
// console.log(allhero); // it gives this output ['shaktiman','krish','Hanuman','spiderman', 'superman', 'batman']

// // spread operator
// const myhero =[...herooo,str]
// const newhero=[...herooo,...dc_hero]//doing merge of 2 array or we can also add a string value like str
// console.log(newhero)

// let array = [1,2,3,[4,5,6,[6,7,8],[8,9]],3,4,5,2]
// let newarr=array.flat(Infinity)//this function add all array into a single array
// console.log( newarr)

// let val="hitesh"
// console.log(Array.isArray(val))//it returns false cause it's not an array
// console.log(Array.from(val))//it converts it into array
// console.log(Array.from({name:"shiv"}))//it gives as an empty array

// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3))//it returns a new array set of variables

// // let val = arr[2]; // val = "laxman"
// // let reversedStr = val.split("").reverse().join(""); // Convert to array, reverse, then join
// // console.log(reversedStr); // Output: "namxal"
