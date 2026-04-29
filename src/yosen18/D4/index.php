<?php
    $one = ["1","2","3"];
    $two = ["2","3","4"];

    $array = array_intersect($one,$two);    
    $items = implode(',',$array)
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=], initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p><?= $items ?></p>
</body>
</html>