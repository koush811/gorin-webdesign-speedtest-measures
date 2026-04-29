<?php
    $file = "data.csv";
    $items = [];

    if(($handle = fopen($file,"r"))!==false){
        while(($row = fgetcsv($handle)) !== false){
        $items[] = $row;
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
    <table>
        <thead>
            <tr>
                <th><?= htmlspecialchars($items[0][0]) ?></th>
                <th><?= htmlspecialchars($items[0][1]) ?></th>
                <th><?= htmlspecialchars($items[0][2]) ?></th>
            </tr>
        </thead>
    
        <tbody>
            <?php foreach(array_slice($items,1) as $item): ?>
                <tr>
                    <td><?= htmlspecialchars($item[0]) ?></td>
                    <td><?= htmlspecialchars($item[1]) ?></td>
                    <td><?= htmlspecialchars($item[2]) ?></td>
                </tr>
            <?php endforeach;?>
        </tbody>
    </table>
    
</body>
</html>