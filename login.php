<?php
session_start();

$correct_username = "B231210013@sakarya.edu.tr";
$correct_password = "B231210013";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['kullaniciadi'];
    $password = $_POST['sifre'];

    if ($username == $correct_username && $password == $correct_password) {
        
        $_SESSION['username'] = $username;
        header("Location: Hakkımda.html");
        exit();
    } else {
        
        $error = "Kullanıcı adı veya şifre hatalı!";
        header("Location: basarısızgiris.html");
        exit();
    }
}
?>