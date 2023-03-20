const btn = document.getElementById('submit');
const form = document.getElementById('formulario');
const state = document.getElementById('final-state')

btn.addEventListener('click', (e) => {
    const nome = nameInput.value;
    const number = cardNumberInput.value;
    const expiration = cardExpirationInput.value;
    const cvv = cvvInput.value;
    e.preventDefault();
    if(validateName(nome) || validateNumber(number) || validateExp(expiration) || validateCvv(cvv)) {
        alert('You need to fill all the fields correctly');
    } else if(number.length < 16) {
        alert('The card number need to be 16 digits');
        cardNumberInput.classList.add('erro');
    } else {
        form.style.display = 'none';
        state.style.display = 'flex';
    }
})