<?php
  $file = "test.csv";
  $items = [];

  if(($handle = fopen($file,"r"))!==false){
    while(($row = fgetcsv($handle)) !== false){
      $items[] = $row;
    }
  }

  

?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>C5</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <table>
    <tr>
      <?php foreach($items as $item): ?>
        <th><?= htmlspecialchars($item[0]) ?></th>
      <?php endforeach; ?>
    </tr>
    <tr>
      <?php foreach($items as $item): ?>
        <td><?= htmlspecialchars($item[1]) ?></td>
      <?php endforeach ?>
    </tr>
  </table>
</body>
</html>
