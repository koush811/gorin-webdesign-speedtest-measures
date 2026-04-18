<?php
$error = '';
$result = '';

if($_SERVER["REQUEST_METHOD"] === "POST"){
  if(!isset($_FILES["file"]) || $_FILES['file']['error'] !== UPLOAD_ERR_OK){
    $error = "失敗";
  }else{
    $file = $_FILES["file"];

    if($file['size'] > 2 * 1024 * 1024){
      $error = "サイズオーバー";
    }else{
      $finfo = finfo_open(FILEINFO_MIME_TYPE);
      $mime = finfo_file($finfo, $file['tmp_name']);
      finfo_close($finfo);

      $allow = [
        'image/jpeg',
        'image/png',
        'image/gif'
      ];

      if(!in_array($mime, $allow)){
        $error = 'ファイルの種類が違います';
      }else{
        $ext = '';
        if($mime === 'image/jpeg') $ext = '.jpg';
        if($mime === 'image/png') $ext = '.png';
        if($mime === 'image/gif') $ext = '.gif';

        $newName = uniqid() . $ext;
        $path = 'uploads/' . $newName;

        if(move_uploaded_file($file["tmp_name"],$path)){
          $result = [
            'name' => $newName,
            'size' => $file['size'],
            'mime' => $mime
          ];
        }else{
          $error = '保存失敗';
        }
      }
    }
  }
}


?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>C3</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <?php if($error): ?>
    <p><?= htmlspecialchars($error) ?></p>
  <?php endif; ?>

    <?php if($result): ?>
      <p>アップロード成功</p>
      <ul>
        <li>ファイル名:<?= htmlspecialchars($result["name"]) ?></li>
        <li>サイズ:<?= htmlspecialchars($result["size"]) ?></li>
        <li>MIME:<?= htmlspecialchars($result["mime"]) ?></li>
      </ul>
    <?php endif; ?>

  <form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit">アップロード</button>
  </form>

</body>
</html>
