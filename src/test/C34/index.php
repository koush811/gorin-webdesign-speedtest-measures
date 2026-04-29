<?php
  $bmi = 0;
  $error = "";
  if($_SERVER["REQUEST_METHOD"] === "POST" ){
    $tallinput = $_POST["tall"];
    $weightinput = $_POST["weight"];

    if($tallinput === "" || $weightinput == ""){
      $error = "入力してください";
    }else if(!is_numeric($tallinput) || !is_numeric($weightinput) || $tallinput <= 0 || $weightinput <= 0){
      $error = "正しい値入力してください";
    }else{
      $tall = (float)$tallinput / 100;
      $weight = (float)$weightinput;
      $bmi = $weight / ($tall * $tall);
      $bmi = round($bmi, 2);
    }

    if ($bmi < 18.5) {
      $result = '低体重（やせ）';
    } elseif ($bmi < 25) {
      $result = '普通体重';
    } elseif ($bmi < 30) {
      $result = '肥満（1度）';
    } else {
      $result = '肥満（2度以上）';
    }
    
  }
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>C34: POSTフォームによるBMI計算と結果表示</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form action="" method="post">
    <div>身長：<input type="number" name="tall"></div>
    <div>体重：<input type="number" name="weight"></div>
    <button type="submit">BMI計算</button>
    <div>BMI:<?= number_format($bmi, 2) ?></div>
    <div><?= $error ?></div>
  </form>
</body>
</html>
