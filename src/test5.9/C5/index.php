<?php
    $num = 0;
    
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="<?php $num++ ?>">+</button>
    <button onclick="<?php $num-- ?>">-</button>
    <div><?= $num ?></div>
    
</body>
</html>