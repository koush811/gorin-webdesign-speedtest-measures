<?php
    session_start();
    $error = "";

    if($_SERVER["REQUEST_METHOD"]==="POST"){
        $name = $_POST["name"];
        $pass = $_POST["pass"];

        if($name === "" || $pass === ""){
            $error = "入力してください";
        }else{
            if($name === "user" && $pass === "pass123"){
                $_SESSION['check'] = true;
                $_SESSION['user_name'] = $name;
                header("Location: user.php");
            }else{
                $error = "ユーザー名またはパスワードが違います";
            }
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
    <div style="color: red;"><?= $error ?></div>
    <form action="" method="post">
        <input type="text" name="name">
        <input type="text" name="pass">
        <button type="submit">Submit</button>
    </form>
</body>
</html>