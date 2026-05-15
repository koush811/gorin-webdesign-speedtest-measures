<?php
    $file = 'items.json';
    $items = [];

    if(file_exists($file)){
        $json = file_get_contents($file);
        $items = json_decode($json,true);
    }

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $name = $_POST["name"];
        $text = $_POST["text"];

        $items[] = [
            "name" => $name,
            "text" => $text
        ];

        file_put_contents($file,json_encode($items,JSON_PRETTY_PRINT));
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
        <input type="text" name="name">
        <input type="text" name="text">
        <button type="submit">SUBMIT</button>
    </form>

    <?php foreach($items as $item): ?>
        <div>NAME:<?= $item["name"] ?></div>
        <div>TEXT:<?= $item["text"] ?></div>
    <?php endforeach ?>
</body>
</html>