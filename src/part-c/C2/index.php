<?php 
  $file = "items.csv";
  $items = [];

  if(($handle = fopen($file,'r'))!== false){
    while(($row = fgetcsv($handle)) !==false){
      $items[] = $row;
    }
  }

  $perPage = 10; //1ページ時の要素数
  $total = count($items); //csv内のitemの数
  $totalpage = ceil($total/$perPage); //一ページ当たりのitem配置数

  $page = isset($_GET["page"]) ? (int)$_GET["page"] : 1;  //条件 ? 真 : 偽
  if($page < 1){
    $page = 1;
  }else if($page > $totalpage){
    $page = $totalpage;
  }

  $start = ($page - 1) * $perPage; //何番目のitmeから表示すか
  $currentitems = array_slice($items,$start,$perPage);  //$startから$perPageまで
?>


<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>C2</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <?php foreach($currentitems as $item): ?>
    <div><?= htmlspecialchars($item[0]) ?></div>
    <div><?= htmlspecialchars($item[1]) ?></div>
  <?php endforeach ?>

  <?php if($page > 1): ?>
    <a href="?page=<?= $page -1 ?>">前へ</a>
  <?php endif ?>

  <?php for($i = 0; $i <= $totalpage; $i++): ?>
    <a href="?page=<?= $i ?>"><?= $i ?></a>
  <? endfor ?>

  <?php if($page < $totalpage): ?>
    <a href="?page<?= $page + 1 ?>">次へ</a>
  <?php endif; ?>
</body>
</html>