<?php
  $file = __DIR__ . "/bbs.json";
  $error = "";

  $data = [];

  if(file_exists($file)){
    $json = file_get_contents($file);
    $decoded = json_decode($json, true);
    if (is_array($decoded)) {
      $data = $decoded;
    }
  }

  if($_SERVER["REQUEST_METHOD"] === "POST"){
    $name = htmlspecialchars($_POST["name"],ENT_QUOTES,"UTF-8");
    $text = htmlspecialchars($_POST["text"],ENT_QUOTES,"UTF-8");

    $newpost = [
      'name' => $name,
      'message' => $text,
    ];

    array_unshift($data,$newpost);

    $result = file_put_contents($file, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), LOCK_EX);
    if ($result === false) {
      $error = "JSONの保存に失敗しました。";
    } else {
      header("Location: " . $_SERVER["REQUEST_URI"]);
      exit;
    }
  }

  
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>C1</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form action="" method="post">
    <input type="text" name="name">
    <input type="text" name="text">
    <button type="submit">保存</button>
  </form>

  <?php if ($error !== ""): ?>
    <p><?= $error ?></p>
  <?php endif; ?>

  <div>
    <?php foreach($data as $post): ?>
      <p>名前:<?= $post["name"] ?></p>
      <p>メッセージ:<?= $post["message"] ?></p>
    <?php endforeach ?>
  </div>
</body>
</html>