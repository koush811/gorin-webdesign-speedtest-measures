<?php 
    $dev = $_POST["value"] ?? [];

    if(!is_array($dev)){
        $dev = [$dev];
    }

    $counts = array_count_values($dev);
    arsort($counts);

    $mode = array_key_first($counts);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <input type="text" name="value[]">
        <input type="text" name="value[]">
        <input type="text" name="value[]">
        <button type="submit">Submit</button>
    </form>
    <?php foreach($dev as $item): ?>
        <p><?= $item ?></p>
    <?php endforeach ?>

    <p>最頻値:<?= $mode ?></p>
</body>
</html>