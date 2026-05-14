<?php
    $file = "/var/www/html/test-php/C1/items.csv";

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $name = $_POST["name"] ?? '';
        $text = $_POST["text"] ?? '';
        
        if($name && $text && ($fp = @fopen($file, "a"))){
            fputcsv($fp, [$name, $text]);
            fclose($fp);
            header("Location: " . $_SERVER['REQUEST_URI']);
            exit();
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
        <input type="text" name="name" placeholder="名前" required>
        <input type="text" name="text" placeholder="テキスト" required>
        <button type="submit">保存</button>
    </form>

    <h3>データ一覧</h3>
    <?php 
        if(file_exists($file) && ($fp = @fopen($file, "r"))):
            while($row = fgetcsv($fp)):
                if($row && count($row) >= 2):
    ?>
                    <div><?= htmlspecialchars($row[0]) ?> : <?= htmlspecialchars($row[1]) ?></div>
    <?php
                endif;
            endwhile;
            fclose($fp);
        else:
    ?>
            <p>データなし</p>
    <?php
        endif;
    ?>
</body>
</html>
