<?php 
    $file = "bbs.json";
    $error = "";

    if(file_exists($file)){
        $json = file_get_contents($file);
        $items = json_decode($json,true);
    }

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $name = $_POST["name"];
        $text = $_POST["text"];

        if($name === "" || $text === ""){
            $error = "未入力";
        }else{
            $new = [
                "name" => $name,
                "body" => $text
            ];
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
        <input type="text" name="name">
        <input type="text" name="text">
        <button type="submit">送信</button>
    </form>
    <p><?= $error ?></p>

    <table>
        <tr>
            <?php foreach ($items as $item): ?>
                <td><?= $item["name"] ?></td>
                <td><?= $item["body"] ?></td>
            <?php endforeach; ?>
        </tr>
    </table>

</body>
</html>