const number=new Number(100.123)
console.log(number.toString().length)//a number didn't have a length so 1st stringify then calculate it's length
console.log(number.toFixed(2))//100.00 if we set vale of 100
console.log(number.toPrecision(4))//sets a limit 100.1


// math
console.log(Math)
console.log(Math.floor(Math.random()*10 + 1))//always returns a value in between 0 to 1 sometimes it returns 0.023 for that purpose this +1 is used
console.log(Math.floor(2.1))//Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.abs(-9))//Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
console.log(Math.ceil(5.1))//Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.round(6.6))//Returns a supplied numeric expression rounded to the nearest integer.
console.log(Math.max(5.54))
console.log(parseInt(Math.random()*10))//always return a integer number