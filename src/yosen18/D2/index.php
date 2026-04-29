<?php
    $error= "";
    $file = "bbs.json";
    $items = [];

    if(file_exists($file)){
        $json = file_get_contents($file);
        $items = json_decode($json,true); 
        if(!is_array($items)){
            $items = [];
        }
    }else{
        file_put_contents($file, json_encode([], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }

    if($_SERVER["REQUEST_METHOD"]==="POST"){
        $name = $_POST["name"];
        $from = $_POST["from"];
        $message = $_POST["message"];

        if($name === "" || $from === "" || $message === ""){
            $error = "未入力";
        }else{
            $new = [
                "name" => $name,
                "from" => $from,
                "message" => $message, 
            ];

            array_push($items,$new);
            file_put_contents($file,json_encode($items,JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
            
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
    <?php if($error): ?>
        <div><?= $error ?></div>
    <?php endif ?>

    <form action="" method="post">
        <input type="text" name="name">
        <input type="text" name="from">
        <input type="text" name="message">
        <button type="submit">送信</button>
    </form>

    <div>
        <?php foreach($items as $item): ?>
            <div><?= $item["name"] ?></div>
            <div><?= $item["from"] ?></div>
            <div><?= $item["message"] ?></div>
        <?php endforeach ?>
    </div>
</body>
</html>