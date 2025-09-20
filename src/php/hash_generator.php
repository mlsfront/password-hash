<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $password = $data['password'] ?? '';
    if (empty($password)) {
        echo json_encode(['error' => 'A senha é obrigatória.']);
        exit;
    }
    $md5Hash = md5($password);
    $sha1Hash = sha1($password);
    $bcryptHash = password_hash($password, PASSWORD_BCRYPT);
    echo json_encode([
        'password' => $password,
        'md5' => $md5Hash,
        'sha1' => $sha1Hash,
        'bcrypt' => $bcryptHash
    ]);
}
?>

