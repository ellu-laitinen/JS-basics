//Make a program that asks three numbers from the user. 
//Program prints out sum of the numbers, if any of the numbers is positive. 
//If all the numbers are positive, also print out multiplication. 
//If all numbers are negative, text “only negatives” is printed. Handle zero as positive in this assignment.



const calculation = () => {

    let firstNumber = document.getElementById('firstNumber').value
    let secondNumber = document.getElementById('secondNumber').value
    let thirdNumber = document.getElementById('thirdNumber').value

    if (firstNumber > -1 && secondNumber > -1 && thirdNumber > -1) {
        document.getElementById('results').innerHTML = +firstNumber + +secondNumber + +thirdNumber
        document.getElementById('results2').innerHTML = firstNumber * secondNumber * thirdNumber

    } else if (firstNumber > -1 || secondNumber > -1 || thirdNumber > -1) {
        document.getElementById('results').innerHTML = +firstNumber + +secondNumber + +thirdNumber
        document.getElementById('results2').innerHTML = ""


    } else if (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) {
        document.getElementById('results').innerHTML = "only negatives"
        document.getElementById('results2').innerHTML = ""
    }

    /*   else {
          let sum = 'something else'
          document.getElementById('results').innerHTML = sum
      }
   */


}