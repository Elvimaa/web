<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
      
    echo "<h1>Вы ввели следующие данные:</h1>";
    echo "<p><strong>Имя:</strong> $name</p>";
    echo "<p><strong>Email:</strong> $email</p>";
} else {
    echo "Некорректный метод запроса.";
}
?>
