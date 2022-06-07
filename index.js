const form = document.querySelector("#form")
const submitBtn = document.querySelector("#submit")
// input
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password-2")

// functions

function displayError(element, text) {
  let smallEl = element.nextElementSibling
  smallEl.className = "visible error"
  smallEl.innerHTML = text
  element.style.borderColor = "red"
}
function displaySuccess(element) {
  element.style.border = "2px solid green"
  element.nextElementSibling.innerText = ""
}

function checkRequire(elements) {
  elements.forEach((element) => {
    if (element.value === "") {
      displayError(element, `${element.previousElementSibling.innerText} is required`)
    }
  })
}

function checkLength(element, min, max) {
  if (element.value.length < min) {
    displayError(element, `Enter at least ${min} characters`)
  } else if (element.value.length > max) {
    displayError(element, `Do not enter more than ${max} characters`)
  } else {
    displaySuccess(element)
  }
}

function validateEmail() {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (email.value.match(mailformat)) {
    displaySuccess(email)
    // return true;
  } else if (email.value !== "") {
    displayError(email, "Invalid email address!")
    // return false;
  }
}

function confirmPassword(element, element2) {
  if (element2.value.length > 0) {
    if (element.value !== element2.value) {
      displayError(element2, `Password does not match`)
    } else {
      displaySuccess(element2)
    }
  }
}

// event listener
form.addEventListener("submit", (e) => {
  e.preventDefault()
  checkRequire([username, email, password, password2])
  checkLength(username, 5, 8)
  checkLength(password, 5, 8)
  validateEmail()
  confirmPassword(password, password2)
})
