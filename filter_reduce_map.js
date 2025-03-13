// map()
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.map((i)=> i+i).map((item)=> item+1))
//double map conditions not only in map we can use multiply which is called function chaining

//reduce()
let sum = 0;
numbers.map((i) => (sum += i));
console.log(sum)
// instad of this we can use reduce() which returns a accumulator or current value as parameter
console.log(numbers.reduce((acc, currval) =>
    acc + currval
)); //this also worked
console.log(
  numbers.reduce(function (acc, currval) {
    console.log(`${acc}   ${currval}`);
    return acc + currval;
  }, 0)
);
//this 0 refers the initial value of accumulator
// this recuce() acc was a empty variable after additon it stores the sum value of both

//filter ()
let arr = ["python", "java", "javascript", "golang", "ruby"];
arr.filter((num)=> console.log(num))
let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 8];
console.log(myarr.filter((num)=> {return num>2}))//{ } this means if scope started then it must have something return
console.log(val)
let newnum = [];
myarr.filter((item) => {
  //same as filter but thet main difference was filter returns a value and foreach not
  if (item > 3) {
    newnum.push(item);
  }
});
console.log(newnum);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let val=books.filter((bk) => bk.genre === "History")
console.log(val)
