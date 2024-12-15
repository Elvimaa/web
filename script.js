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
});
