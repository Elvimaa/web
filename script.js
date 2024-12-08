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
            alert('Регистрация успешна!'); // Здесь можно добавить логику для дальнейшей обработки данных
            registrationForm.reset(); // Сброс формы после успешной регистрации
        }
    });
    const loginForm = document.querySelector('.form-container:first-of-type form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Здесь можно добавить логику для проверки учетных данных
        if (email && password) {
            alert('Вход успешен!'); // Замените на реальную логику входа
            loginForm.reset(); // Сброс формы после успешного входа
        }
    });
});