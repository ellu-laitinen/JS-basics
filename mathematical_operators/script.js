//Make a program that asks the price of the gasoline and amount of money from the user.
//The program calculates how much gasoline the user gets with the money. Result is printed to the user.


const getAmount = () => {
    const price = document.getElementById('price').value
    const money = document.getElementById('money').value

    const gas = money / price
    document.getElementById('gas').innerHTML = gas + ' litres.'

}

// Make a program that calculates and prints out the average speed. 
// Ask from the user distance and the time that was used. 
// With those values program calculates the average speed and prints it to the user.


const avgSpeed = () => {
    const distance = document.getElementById('distance').value
    const time = document.getElementById('time').value

    const speed = distance / time;

    document.getElementById('speed').innerHTML = speed + ' km/h'
}

// Make a program that transforms inches to centimeter. 1 inch = 2.54 cm 
//The answer should be in this form:”x incs is y centimeter.”

const inCentimeters = () => {
    const inches = document.getElementById('inches').value

    const centimeters = inches * 2.54;

    document.getElementById('centimeters').innerHTML = centimeters + " cm."
}