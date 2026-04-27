<?php
session_start();

if (!isset($_SESSION["user"])) {
    header("Location: index.php");
    exit;
}

if (isset($_POST["logout"])) {
    session_destroy();
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>
<body>
    <h1>Dashboard</h1>
    <p>
        ようこそ
        <?= htmlspecialchars($_SESSION["user"]["user1"], ENT_QUOTES, "UTF-8") ?>
        さん
    </p>

    <form action="" method="post">
        <button type="submit" name="logout" value="1">ログアウト</button>
    </form>
</body>
</html>