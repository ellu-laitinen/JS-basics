
//Make a program that asks repeatedly from the user the distance (km) 
//and time (h) and calculates average speed. 
//The program ends when user gives 0 for the distance. 
// (After getting 0, the program does not ask anything from the user.)




const getAvgSpeed = () => {

    let distance = document.getElementById('distance').value;
    let time = document.getElementById('time').value;
    const avgSpeed = distance / time;
    document.getElementById('avgSpeed').innerHTML = avgSpeed;

    do {

        prompt('enter time and distance!')
    } while (distance != 0)


}

