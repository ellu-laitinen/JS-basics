// Make a program that asks 25 numbers form the user.
//In the end program prints out average of the numbers.

let numbers = [];

for (let i = 0; i < 8; i++) {
    numbers.push(prompt('give a number'))
}

let sum = numbers.reduce((a, b) => a + b, 0)

/* avgNumber = sum / numbers.length */

console.log(sum)
alert(sum)