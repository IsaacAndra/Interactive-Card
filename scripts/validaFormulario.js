/*   Validação do campo NOME     */

const nameInput = document.getElementById('card-name');
const nameError = document.getElementById('name-error');


nameInput.addEventListener('blur', function validateForm() {
    const nome = nameInput.value;
    if (validateName(nome)) {
        nameError.textContent = validateName(nome);
        nameInput.classList.add('erro');
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('erro');
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

cardNumberInput.addEventListener('blur', () => {
    const number = cardNumberInput.value;
    if (validateNumber(number)) {
        cardNumberError.textContent = validateNumber(number);
        cardNumberInput.classList.add('erro');
    } else {
        cardNumberError.textContent = '';
        cardNumberInput.classList.remove('erro');
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
    if(number.length < 16) {
        return 'O campo deve conter 16 dígitos';
    }
    return '';
}

/*   --------------------    */

/*   Validação do campo EXP.DATE     */

const cardExpirationInput = document.getElementById('card-expiration');
const cardExpirationError = document.getElementById('card-expiration-error')



cardExpirationInput.addEventListener('blur', () => {
    const expiration = cardExpirationInput.value;
    if(validateExp(expiration)) {
        cardExpirationError.textContent = validateExp(expiration);
        cardExpirationInput.classList.add('erro');
    } else {
        cardExpirationError.textContent = '';
        cardExpirationInput.classList.remove('erro');
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

cvvInput.addEventListener('blur', () => {
    const cvv = cvvInput.value;
    if(validateCvv(cvv)) {
        cvvError.textContent = validateCvv(cvv);
        cvvInput.classList.add('erro');
    } else {
        cvvError.textContent = '';
        cvvInput.classList.remove('erro');
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