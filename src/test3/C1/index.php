<?php 

    $len = 0;
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $text = $_POST["text"];

        $len = strlen($text);
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
        <input type="text" name="text">
        <button type="submit">Submit</button>
    </form>
    <div><?= $len ?></div>
</body>
</html>