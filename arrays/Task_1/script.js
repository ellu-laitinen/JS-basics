/* 	Make an array that has 10 numbers: 
let numbers = [4, -5, -2, 7, 15, -9, 0, 6, 7, 2];
    a.	Program prints out the numbers in the array as follows:
    1. number 4
    2. number -5
    ...
    b.	Program swaps third and seventh number other way around.
    c.	Program calculates the sum of the numbers and prints out the result.
    d.	Program calculates the average of the numbers and prints out the result.
    e.	Program finds out the smallest number and prints it.
    f.	Program asks one number from the user and then counts how many times that number is in the array. Program prints out the result.
    g.	Program prints out all the numbers that are in the array before 0.
    h.	Program counts how many numbers there are after 0 and prints out the result. */

const numbers = [4, -5, -2, 7, 15, -9, 0, 6, 7, 2]

const printNumbers = () => {
    document.getElementById('numbersArray').innerHTML = numbers
}

const swapNumbers = () => {
    const a = numbers[2]
    numbers[2] = numbers[6];
    numbers[6] = a
    document.getElementById('swappedNumbersArray').innerHTML = numbers
}

const sumOfNumbers = () => {

    const sum = numbers.reduce((a, b) => {
        return a + b
    }, 0);

    document.getElementById('sumArray').innerHTML = sum;

}

const averageOfNumbers = () => {
    const sum = numbers.reduce((a, b) => {
        return a + b
    }, 0);
    const average = sum / numbers.length

    document.getElementById('avgArray').innerHTML = average
}

const smallestNumber = () => {
    const min = Math.min(...numbers)

    document.getElementById('smallest').innerHTML = min
}

const userNumber = () => {
    const userNumber = document.getElementById('number').value
    const count = numbers.filter(x => x == userNumber).length;

    document.getElementById('userNumber').innerHTML = count
}

const beforeZero = () => {
    const firstNumbers = numbers.slice(0, 6)

    document.getElementById('beforeZero').innerHTML = firstNumbers
}

const afterZero = () => {
    const lastNumbers = numbers.slice(7, 10)
    const lengthOfNumbers = lastNumbers.length

    document.getElementById('afterZero').innerHTML = lengthOfNumbers + " numbers: " + lastNumbers
}