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