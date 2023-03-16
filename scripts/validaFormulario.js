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
        return 'Por favor, preencha o campo nome';
    }
    if(!regex.test(nome)) {
        return 'O campo nome deve conter apenas letras e espaços';
    }
    if(nome.length < 3 || nome.length > 50) {
        return "O campo nome deve ter entre 3 e 50 caracteres";
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
        return 'Por favor, preencha o campo com o número do seu cartao';
    }
    if(!regex.test(number)) {
        return 'O campo nome deve conter apenas números e espaços';
    }
    if(number.length < 2) {
        return 'O campo deve conter 16 dígitos';
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
        return 'Por favor, coloque a data de expiraçao do seu cartao com o caractere "/"';
    }
    if(!regex.test(expiration)) {
        return 'O campo deve conter dois números do mês + "/" + 2 números do ano ';
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
        return 'Por favor, coloque o código de segurança do seu cartao';
    }
    if(!regex.test(cvv)) {
        return 'O campo deve conter apenas números';
    }
    if(cvv.length < 3) {
        return 'O campo deve conter 3 dígitos';
    }
    return '';
}