const btn = document.getElementById('submit');
const form = document.getElementById('formulario');

btn.addEventListener('click', (e) => {
    const nome = nameInput.value;
    const number = cardNumberInput.value;
    const expiration = cardExpirationInput.value;
    const cvv = cvvInput.value;
    e.preventDefault();
    if(validateName(nome) || validateNumber(number) || validateExp(expiration) || validateCvv(cvv)) {
        alert('You need to fill all the fields correctly');
    } else {
        form.style.display = 'none';
    }
})