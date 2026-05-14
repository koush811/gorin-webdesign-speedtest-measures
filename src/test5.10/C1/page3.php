<?php
    session_start();

    if(!isset($_SESSION["page1"])){
        $_SESSION["page1"] = "未入力";
    }
    if(!isset($_SESSION["page2"])){
        $_SESSION["page2"] = "未入力";
    }
    if(!isset($_SESSION["page3"])){
        $_SESSION["page3"] = "未入力";
    }

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $_SESSION["page3"] = $_POST["value"];
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
        <input type="text" name="value">
        <button type="submit">Submit</button>
    </form>
    <div>1: <?= $_SESSION["page1"] ?></div>
    <div>2: <?= $_SESSION["page2"] ?></div>
    <div>3: <?= $_SESSION["page3"] ?></div>
</body>
</html>