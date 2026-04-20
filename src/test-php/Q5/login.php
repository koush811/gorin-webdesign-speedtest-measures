<?php 
    session_start();

    $error = "";

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $admin = $_POST["admin"];
        $pass = $_POST["pass"];

        if($admin !== "admin"){
            $error = "IDが違います";
        }else if($pass !== "pass1234"){
            $error = "パスワード不一致";
        }else{  
            $_SESSION["name"] = $admin;
            header("Location: mypage.php");
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
    <form action="" method="post">
        <input type="text" name="admin">
        <input type="text" name="pass">
        <button type="submit">ログイン</button>
    </form>
    <div><?= $error ?></div>
</body>
</html>