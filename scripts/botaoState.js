const btnState = document.getElementById('submitState');


btnState.addEventListener('click', (e) => {
    e.preventDefault();
    if(btnState) {
        state.style.display = 'none';
        form.style.display = 'flex';
        location.reload();
    }
})