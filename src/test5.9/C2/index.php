<?php
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $age = $_POST["age"];

        if($age >= 18){
            header("Location: page.php");
        }else{
            header("Location: https://google.co.jp");
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
        <input type="number" name="age">
        <button type="submit">Submit</button>
    </form>
</body>
</html>