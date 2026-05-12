<?php

header("Content-Type: application/json");

include("../config/database.php");

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$sql = "SELECT * FROM users WHERE email = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param("s", $email);

$stmt->execute();

$result = $stmt->get_result();

$user = $result->fetch_assoc();

if ($user &&
    password_verify(
        $password,
        $user['password']
    )
) {

    echo json_encode([
        "message" => "Login sucesso",
        "user" => $user
    ]);

} else {

    echo json_encode([
        "message" => "Credenciais inválidas"
    ]);
}