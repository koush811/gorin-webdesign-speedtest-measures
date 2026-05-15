<?php
    $num = 1;
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $num = $_POST["num"];
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
        <select name="num" id="">
            <?php for($i = 1; $i <= 20; $i++): ?>
                <option value="<?= $i ?>"><?= $i ?></option>
            <?php endfor ?>
            
        </select>
        <button type="submit">SUBMIT</button>
    </form>
    <? for($j = 1; $j <= 9; $j++): ?>
        <div><?= $num ?>*<?= $j ?>=<?= $num*$j ?></div>
    <? endfor ?>
    
</body>
</html>