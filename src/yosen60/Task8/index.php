<?php 
    $file = "log.json";
    $items = [];

    if(file_exists($file)){
        $json = file_get_contents($file);
        $decode = json_decode($json,true);
        $items = $decode;
    }

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $name = $_POST["name"];
        $content = $_POST["content"];
        
        $new = [
            "name" => $name,
            "content" => $content,
            "date" => date("Y-m-d H:i:s")
        ];

        $items[] = $new;
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
        <input type="text" name="content">
        <button type="submit">Submit</button>
    </form>

    <?php foreach ($items as $item): ?>
        <p><?= htmlspecialchars($item["name"]) ?></p>
        <p><?= htmlspecialchars($item["content"]) ?></p>
        <p><?= $item["date"] ?></p>
    <?php endforeach ?>
</body>
</html>