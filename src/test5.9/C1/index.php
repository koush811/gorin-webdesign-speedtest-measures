<?php
    $file = "item.json";

    if(file_exists($file)){
        $json = file_get_contents($file);
        $items = json_decode($json,true);
    }

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $name = $_POST["name"];
        $message = $_POST["message"];

        $items[] = [
            "name" => $name,
            "message" => $message,
            "date" => date('Y-m-d h:m:s')
        ];
    }

    file_put_contents($file,json_encode($items,JSON_PRETTY_PRINT || JSON_UNESCAPED_UNICODE));

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
        <input type="text" name="message">
        <button type="submit">Submit</button>
    </form>
    <?php foreach($items as $item): ?>
        <p><?= $item["name"] ?></p>
        <p><?= $item["message"] ?></p>
        <p><?= $item["date"] ?></p>
    <?php endforeach ?>
</body>
</html>