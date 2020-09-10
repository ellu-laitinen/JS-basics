//Make a program that asks age of the user. 
//If the age is less than 18 the text “too young” is printed. 
//If the age is less than 27 the text “Right age for military service” is printed. 
//If the age is less than 41 the text “You are in reserve” is printed. 
// If the age is less than 55 the text “You are in backup reserve” is printed.
// All other cases “too aged” is printed.



const getAge = () => {
    let age = document.getElementById('age').value
    if (age < 18) {
        console.log('too young')
        document.getElementById('paragraph').innerHTML = "too young"
    } else if (age >= 18 && age < 27) {
        console.log('old enough')
        document.getElementById('paragraph').innerHTML = "right age for military service"
    } else if (age >= 27 && age < 41) {
        document.getElementById('paragraph').innerHTML = "you are in reserve"
    } else if (age >= 41 && age < 55) {
        document.getElementById('paragraph').innerHTML = "you are in backup reserve"
    } else {
        document.getElementById('paragraph').innerHTML = "too aged"
    }

}


