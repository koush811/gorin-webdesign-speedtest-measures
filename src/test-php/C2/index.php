<?php
    $error = "";
    
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $id = $_POST["id"] ?? "";
        $pass = $_POST["pass"] ?? "";

        if($id === "id" && $pass === "pass"){
            header("Location: login.php");
            exit;
        } else {
            $error = "IDまたはパスワードが違います";
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if($error): ?>
        <p style="color: red;"><?= htmlspecialchars($error) ?></p>
    <?php endif; ?>
    <form action="" method="post">
        <input type="text" name="id" placeholder="ID">
        <input type="text" name="pass" placeholder="パスワード">
        <button type="submit">送信</button>
    </form>
    <p>テスト用: ID=id, パスワード=pass</p>
</body>
</html>