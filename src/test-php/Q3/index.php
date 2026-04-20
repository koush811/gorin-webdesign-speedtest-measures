<?php 

    $error = "";

    if($_SERVER["REQUEST_METHOD"]==="POST"){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $age = $_POST["age"];

        if(strlen($name) > 12){
            $error = "12文字以内にしてください";
        }else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error = "形式エラー";
        }else if(!is_numeric($age)|| $age > 120){
            $error = "数値入力かつ120文字以内にしてください";
        }else{
            echo "送信完了;". $name."さん".$email.",年齢".$age."歳";
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
    <form action="" method="post">
        <input type="text" name="name">
        <input type="text" name="email">
        <input type="number" name="age">
        <button type="submit">送信</button>
        <p style="color: red;"><?= $error ?></p>
    </form>
</body>
</html>