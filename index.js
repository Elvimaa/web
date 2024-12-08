document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const passwordError = document.getElementById('passwordError');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const reg_password = document.getElementById('reg_password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (reg_password !== confirmPassword) {
            passwordError.textContent = 'Пароли не совпадают!';
            passwordError.style.color = 'red';
        } else {
            passwordError.textContent = '';
            alert('Регистрация успешна!');
            registrationForm.reset();
        }
    });
    const loginForm = document.querySelector('.form-container:first-of-type form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (email && password) {
            alert('Вход успешен!');
            loginForm.reset();
        }
    });
});
