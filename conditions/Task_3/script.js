//Make a program that asks one number from the user.
//Then the program finds out if the number is positive and is the number divisible by 2.

const calculate = () => {
    const number = document.getElementById('number').value

    if (number % 2 === 0 && number > -1) {
        document.getElementById('results').innerHTML = "number is positive and divisible by 2"
    } else {
        document.getElementById('results').innerHTML = "number is not positive or not divisible by 2"

    }

}

