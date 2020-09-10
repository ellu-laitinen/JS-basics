//Make a program that prints all positive numbers that are odd
//and smaller than 100 starting from 1. (1 3 5 7 9 11…)

const oddNumbers = () => {
    let i;
    for (i = 1; i <= 100; i++) {
        if ((i % 2) == 0) {
            continue;
        }
        document.getElementById('oddNumbers').innerHTML += i + ' - ';
    }
}

// Make a program that prints all positive numbers 
//that are smaller than 100 and even, in this order:
// 2 98 4 96 6 94 …

const evenNumbers = () => {
    let i;
    for (i = 2; i <= 100; i++) {
        if ((i % 2) != 0) {
            continue;
        }
        document.getElementById('evenNumbers').innerHTML += i + ' - ';
    }
}

//Make a program that asks repeatedly from the user the distance (km) 
//and time (h) and calculates average speed. 
//The program ends when user gives 0 for the distance. 
// (After getting 0, the program does not ask anything from the user.)
