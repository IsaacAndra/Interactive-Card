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
        return 'Por favor, preencha o campo nome';
    }
    if(!regex.test(number)) {
        return 'O campo nome deve conter apenas números e espaços';
    }
    if(number.length < 16) {
        return 'O campo deve conter 16 dígitos';
    }
    return '';
}