<?php
session_start();

// Form gönderildiğinde
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Giriş başarılı ise oturum başlat
    $_SESSION["username"] = $_POST["username"];
    header("Location: sehrim.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş Sayfası</title>
</head>
<body>
    <h2>Giriş Yapın</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <div>
            <label for="username">Kullanıcı Adı:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div>
            <label for="password">Şifre:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Giriş Yap</button>
    </form>
</body>
</html>
