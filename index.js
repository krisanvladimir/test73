const inputName = document.querySelector('.name')
const inputPhone = document.querySelector('.phone')
const inputEmail = document.querySelector('.email')
const inputCheck = document.querySelector('.checkbox')
const button = document.querySelector('[type="button"]')
const booking = document.querySelector('.booking')
const popup = document.querySelector('.popup')
let message = document.querySelector('.message')
let emailValid = false
let phoneValid = false
let nameValid = false
let checkValid = false

// Valid Email

inputEmail.addEventListener('input', updateEmail);
function updateEmail() {
    if (validateEmail(inputEmail.value)) {
        inputEmail.style.borderColor = 'green'
        emailValid = true
        console.log(emailValid)
    } else {
        inputEmail.style.borderColor = 'red'
    }
}
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function validateEmail(value) {
    return EMAIL_REGEXP.test(value);
}

// Valid Phone

inputPhone.addEventListener('input', updatePhone);
function updatePhone() {
    if (inputPhone.value.length === 12) {
        inputPhone.style.borderColor = 'green'
        phoneValid = true
        console.log(phoneValid)
    } else {
        inputPhone.style.borderColor = 'red'
    }
}

// Valid Name

inputName.addEventListener('input', updateName);
function updateName() {
    if (inputName.value.length > 2 && inputName.value.length < 50) {
        inputName.style.borderColor = 'green'
        nameValid = true
        console.log(nameValid)
    } else {
        inputName.style.borderColor = 'red'
    }
}

// Valid Check

inputCheck.addEventListener('input', checkName);
function checkName() {
    if (inputCheck.checked) {
        checkValid = true
        console.log(checkValid)
    }
}

// click

button.addEventListener('click', popupAlert)

function popupAlert(event) {
    if (checkValid, nameValid, emailValid, phoneValid) {
        button.removeAttribute('disabled');
        popup.style.display='flex'
        event.preventDefault();
    } else {
        message.style.display='block'
    }
}

popup.addEventListener('click', (e) => {
    if (e.target) {
        popup.style.display='none'
    }
})

booking.addEventListener('click', (e) => {
    popup.style.display='flex'
})




