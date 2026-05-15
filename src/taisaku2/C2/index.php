<?php
    $file = 'items.csv';

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $name = $_POST["name"];
        $text = $_POST["text"];

        $fp = fopen($file,"a");
        fputcsv($fp,[$name,$text]);
        fclose($fp);
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

    <?php if($fp = fopen($file,"r")): ?>
        <?php while($row = fgetcsv($fp)): ?>
            <div><?= htmlspecialchars($row[0]) ?>,<?= htmlspecialchars($row[1]) ?></div>
        <?php endwhile ?>
        <?php fclose($fp) ?>
    <?php endif ?>
</body>
</html>