<?php

$host = "localhost";
$dbname = "weather_system";
$username = "root";
$password = "";

$conn = new mysqli(
    $host,
    $username,
    $password,
    $dbname
);

if ($conn->connect_error) {
    die("Erro conexão: " . $conn->connect_error);
}