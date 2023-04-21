let checkAge = document.getElementById("checkAge")
checkAge.addEventListener("click", confirmAge)

function confirmAge() {
  let age = prompt("What's your age?", 0)

  if (age >= 25) {
    alert("You are 25 years old and up!")
  } else {
    alert("You are not 25 years old yet!")
  }
}

let checkNumber = document.getElementById("checkNumber")
checkNumber.addEventListener("click", confirmLessThanHundred)

function confirmLessThanHundred() {
  let number = prompt("Please enter a number:", 0)

  if (number < 100) {
    alert("You entered a number less than 100.")
  } else if (number == 100) {
    alert("You entered a number equal to 100.")
  } else {
    alert("You entered a number greater than 100.")
  }
}


