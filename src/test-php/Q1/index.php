<?php

    $min = (int)$_GET["min"];
    $max = (int)$_GET["max"];

    $num = [1,2,3,4,5,6,7,8,9];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <?php if(isset($_GET["min"]) && isset($_GET["max"]) && is_numeric($_GET["min"]) && is_numeric($_GET["max"])): ?>
            <ul>
                <?php for($i=$min; $i <= $max; $i++): ?>
                    <li><?= $i ?></li>
                <?php endfor; ?>
            </ul>
        <?php else: ?>
            <p>パラメーターが不一致です</p>
        <?php endif; ?>
</body>
</html>