<?php
  $num = array(85, 92, 78, 95, 88, 72, 96, 84, 90, 77);
  sort($num);

  $total = array_sum($num);
  $kosuu = count($num);
  $ave = $total / $kosuu;
  $max = max($num);
  $min = min($num);
  $overAve = array_filter($num, function ($n) use ($ave) {
    return $n >= $ave;
  });
  
  $numChange = array_map(function ($change) {
    return $change + $change*0.1;
  },$num);

  echo implode(',',$numChange);

  echo "平均:".$ave."<br>"; 
  echo "平均以上:".implode(', ', $overAve);

?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>C7</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

</body>
</html>
