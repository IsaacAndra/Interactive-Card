/*   Validação do campo NOME     */

const nameInput = document.getElementById('card-name');
const nameError = document.getElementById('name-error');
const nameDisplay = document.getElementById('card-name-display');


nameInput.addEventListener('input', function validateForm() {
    const nome = nameInput.value;
    const textoPadrao = 'Name';
    if (validateName(nome)) {
        nameError.textContent = validateName(nome);
        nameInput.classList.add('erro');
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('erro');
        nameDisplay.textContent = nome;
    }
    if(nome === '') {
        nameDisplay.textContent = textoPadrao;
    }
})

function validateName(nome) {
    const regex = /^[a-zA-Z ]+$/;
    if(!nome) {
        return 'Please, put in the field your name';
    }
    if(!regex.test(nome)) {
        return 'Wrong format, letters only';
    }
    if(nome.length < 3 || nome.length > 50) {
        return "The name field must be between 3 and 50 characters long";
    }
    return '';
   
}
/*  ------------------   */

/*   Validação do campo CARD NUMBER     */

const cardNumberInput = document.getElementById('card-number');
const cardNumberError = document.getElementById('card-number-error');
const cardNumberDisplay = document.getElementById('card-number-display');

cardNumberInput.addEventListener('input', () => {
    const number = cardNumberInput.value;
    const numeroPadrao = '0000 0000 0000 0000'
    if (validateNumber(number)) {
        cardNumberError.textContent = validateNumber(number);
        cardNumberInput.classList.add('erro');
    } else {
        cardNumberError.textContent = '';
        cardNumberInput.classList.remove('erro');
        cardNumberDisplay.textContent = number;
    }
    if(number === '') {
        cardNumberDisplay.textContent = numeroPadrao;
    }
})


function validateNumber(number) {
    const regex = /^[0-9\s]+$/;

    if(!number) {
        return 'Please, put in the fild your card number';
    }
    if(!regex.test(number)) {
        return 'The field must only contain numbers and spaces';
    }
    if(number.length < 16) {
        return 'Field must contain 16 digits';
    }
    return '';
}

/*   --------------------    */

/*   Validação do campo EXP.DATE     */

const cardExpirationInput = document.getElementById('card-expiration');
const cardExpirationError = document.getElementById('card-expiration-error');
const expDisplay = document.getElementById('card-exp-display');



cardExpirationInput.addEventListener('input', () => {
    const expiration = cardExpirationInput.value;
    const expPadrao = '00/00';
    if(validateExp(expiration)) {
        cardExpirationError.textContent = validateExp(expiration);
        cardExpirationInput.classList.add('erro');
    } else {
        cardExpirationError.textContent = '';
        cardExpirationInput.classList.remove('erro');
        expDisplay.textContent = expiration;
    }
    if(expiration === '') {
        expDisplay.textContent = expPadrao;
    }
})


function validateExp(expiration) {
    const regex = /^(0[1-9]|1[0-2])\/(\d{2})$/;

    if(!expiration) {
        return 'Please, enclose your card expiration date with the "/" character';
    }
    if(!regex.test(expiration)) {
        return 'Must contain two month numbers + "/" + 2 year numbers';
    }
    return '';
}
/*   ------------------     */

/*   Validação do campo CVV     */

const cvvInput = document.getElementById('card-back-cvv');
const cvvError = document.getElementById('card-back-cvv-error');
const cvvDisplay = document.getElementById('card-cvv-display');

cvvInput.addEventListener('input', () => {
    const cvv = cvvInput.value;
    const cvvPadrao = '000'
    if(validateCvv(cvv)) {
        cvvError.textContent = validateCvv(cvv);
        cvvInput.classList.add('erro');
    } else {
        cvvError.textContent = '';
        cvvInput.classList.remove('erro');
        cvvDisplay.textContent = cvv;
    }
    if(cvv === '') {
        cvvDisplay.textContent = cvvPadrao;
    }
})




function validateCvv(cvv) {
    const regex = /^[0-9\s]+$/;

    if(!cvv) {
        return 'Please, enter your card security code';
    }
    if(!regex.test(cvv)) {
        return 'Wrong format, numbers only';
    }
    if(cvv.length < 3) {
        return 'Field must contain 3 digits';
    }
    return '';
}