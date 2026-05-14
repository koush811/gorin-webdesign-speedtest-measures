<?php
    session_start();
    $maxnum = 100;
    $maxpage = 10;

    $page = $_GET["page"] ?? 1;

    if(!is_numeric($page)){
        $page = 1;
    }else{
        $page = (int)$page;
    }

    $start = ($page -1) * $maxnum+1;
    $end = $page * $maxnum;

    if($page === 1){
        $prevpage = 1;
    }else{
        $prevpage = $page - 1;
    }
    
    if($page === $maxpage){
        $nextpage = $maxpage;
    }else{
        $nextpage = $page+1;
    }

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ページネーション</title>
</head>
<body>

    <p>現在のページ: <?= $page ?></p>
    
    <ul>
        <?php for ($i = $start; $i <= $end; $i++): ?>
            <li><?= $i ?></li>
        <?php endfor ?>
    </ul>

    <div>
        <a href="?page=<?= $prevpage ?>"><button>前へ</button></a>
        <a href="?page=<?= $nextpage ?>"><button>次へ</button></a>
    </div>
   
</body>
</html>