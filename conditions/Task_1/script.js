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


