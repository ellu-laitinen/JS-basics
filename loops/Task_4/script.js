//Make a program that asks 20 numbers from user.
// After that the program prints out how many of those numbers where even.

const numbers = []
const evenNumbers = []

for (let i = 0; i < 7; i++) {
    numbers.push(prompt('give  number'));
}

for (let b = 0; b < numbers.length; b++) {
    if ((numbers[b] % 2) === 0) {
        evenNumbers.push(numbers[b])
    }
}

alert('amount of even numbers: ' + evenNumbers.length)

console.log(numbers)





