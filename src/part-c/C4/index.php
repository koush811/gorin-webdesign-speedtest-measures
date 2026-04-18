<?php
  session_start();

  $users = [
    'admin' => password_hash('1234', PASSWORD_DEFAULT),
    'user'  => password_hash('pass', PASSWORD_DEFAULT)
  ];

  $error = "";

  if(isset($_GET["logout"])){
    session_destroy();
    header("Location: index.php");
    exit;
  }

  if($_SERVER["REQUEST_METHOD"]==="POST"){
    $pass = $_POST["pass"];
    $name = $_POST["name"];
    if($pass ==="" || $name ==="" ){
      $error = "未入力";
    }else{
      if(isset($users[$name]) && password_verify($pass, $users[$name])){
      $_SESSION["user"] = $name;
      header("Location: index.php");
      exit;
    }else{
      $error = "ログイン失敗";
    }
    }

    
  }

  $isLogin = isset($_SESSION["user"]);
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>C4</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <?php if(!$isLogin): ?>
    <?php if($error): ?>
      <p><?=  htmlspecialchars($error) ?></p>
    <?php endif; ?>
    <form action="" method="post">
      <input type="name" name="name">
      <input type="password" name="pass">
      <button type="submit">ログイン</button>
    </form>
  <?php else: ?>
    <h1>マイページ</h1>
    <p>ようこそ<?= htmlspecialchars($_SESSION["user"]) ?>さん</p>
    <a href="?logout=1">ログアウト</a>
  <?php endif; ?>

</body>
</html>
