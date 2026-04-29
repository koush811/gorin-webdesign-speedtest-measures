<?php
session_start();

$error = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["name"] ?? "");
    $pass = trim($_POST["pass"] ?? "");

    if ($name === "" || $pass === "") {
        $error = "ユーザー名とパスワードを入力してください";
    } else {
        try {
            $pdo = new PDO(
                "mysql:host=mariadb;dbname=app;charset=utf8mb4",
                "app",
                "app",
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                ]
            );

            $stmt = $pdo->prepare("SELECT user1, user2 FROM user WHERE user1 = ? LIMIT 1");
            $stmt->execute([$name]);
            $user = $stmt->fetch();

            if ($user && $user["user2"] === $pass) {
                $_SESSION["user"] = $user;
                header("Location: dashboard.php");
                exit;
            }

            $error = "ログイン失敗";
        } catch (PDOException $e) {
            $error = "接続エラー";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ログイン</title>
</head>
<body>
    <h1>ログイン</h1>

    <?php if ($error !== ""): ?>
        <p><?= htmlspecialchars($error, ENT_QUOTES, "UTF-8") ?></p>
    <?php endif; ?>

    <form action="" method="post">
        <input type="text" name="name" placeholder="ユーザー名">
        <input type="password" name="pass" placeholder="パスワード">
        <button type="submit">ログイン</button>
    </form>
</body>
</html>