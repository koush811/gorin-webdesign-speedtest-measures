<?php
    $file = "bbs.json";
    $items = [];

    if(file_exists($file)){
        $json = file_get_contents($file);
        $items = json_decode($json,true);
        if(!is_array($items)){
            $items = [];
        }
    }

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $name = $_POST["name"];
        $message = $_POST["message"];

        $new = [
            "name" => $name,
            "message" => $message,
            "date" => date("Y-m-d H-i-s")
        ];

        array_push($items,$new);
        file_put_contents($file,json_encode($items,JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
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
        <input type="text" name="message">
        <button type="submit">送信</button>
    </form>

    <ul>
        <?php foreach ($items as $item): ?>
            <ul><?= $item["name"] ?></ul>
            <ul><?= $item["message"] ?></ul>
            <ul><?= $item["date"] ?></ul>
        <?php endforeach; ?>
    </ul>
</body>
</html>