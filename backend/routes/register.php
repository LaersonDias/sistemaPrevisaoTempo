header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

<?php

header("Content-Type: application/json");

include("../config/database.php");

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$email = $data->email;

$password = password_hash(
    $data->password,
    PASSWORD_DEFAULT
);

$sql = "INSERT INTO users
(username, email, password)
VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "sss",
    $username,
    $email,
    $password
);

if ($stmt->execute()) {

    echo json_encode([
        "message" => "Utilizador criado"
    ]);

} else {

    echo json_encode([
        "message" => "Erro"
    ]);
}