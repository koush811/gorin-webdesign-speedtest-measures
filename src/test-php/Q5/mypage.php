<?php 
    session_start();

    if(!isset($_SESSION["name"])){
        header("Location: login.php");
    }else{
        if($_SERVER["REQUEST_METHOD"] === "POST"){
            session_destroy();
            header("Location: login.php");
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
    <h1>まいぺーじ</h1>
    <form action="" method="post">
        <button type="submit">ログアウト</button>
    </form>
</body>
</html>