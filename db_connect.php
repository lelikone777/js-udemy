<?php


$servername = "localhost";
$database = "webma158_food";
$username = "webma158_food";
$password = "Push112321";
// Создаем соединение
$conn = mysqli_connect($servername, $username, $password, $database);
// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_close($conn);
?>;