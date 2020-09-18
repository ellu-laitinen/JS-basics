/*
- Ask from user licence plate, car maker, car model, price and color.
- Get the user input and create a new car object based on those properties
- Make array of added cars and show console table with array */

const cars = []

function Car(licence, maker) {
    this.licence = licence;
    this.maker = maker;
}

const getCars = () => {
    const car = new Car(
        licence = document.getElementById('licence').value,
        maker = document.getElementById('maker').value
    )
    /* 
    document.getElementById('cars').innerHTML = cars.licence + cars.maker + cars.model +
        cars.price + cars.color */
    cars.push(car)
    document.getElementById('cars').innerHTML = cars/*  car.licence + ", " + car.maker */

    console.log(cars)
}
