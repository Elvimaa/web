document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const messageDiv = document.getElementById("message");

    if (password === confirmPassword) {
        messageDiv.textContent = "Пароли совпадают!";
        messageDiv.style.color = "green";
    } else {
        messageDiv.textContent = "Пароли не совпадают. Попробуйте снова.";
        messageDiv.style.color = "red";
    }
});
