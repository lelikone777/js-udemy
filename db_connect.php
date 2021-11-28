<?php
//
//
//$servername = "94.130.167.163";
//$database = "webma158_food";
//$username = "webma158_food";
//$password = "Push112321";
//// Создаем соединение
//$conn = mysqli_connect($servername, $username, $password, $database);
//// Проверяем соединение
//if (!$conn) {
//    die("Connection failed: " . mysqli_connect_error());
//}
//echo "Connected successfully";
//mysqli_close($conn);
//


$host = '94.130.167.163';
$db   = 'webma158_food';
$user = 'webma158_food';
$pass = 'Push112321';
$charset = 'utf8';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
var_dump($dsn);

$opt = [
PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($dsn, $user, $pass, $opt);
