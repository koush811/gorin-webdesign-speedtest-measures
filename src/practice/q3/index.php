<?php

    $error = "";

    if($_SERVER["REQUEST_METHOD"]==="POST"){
        $name = $_POST["name"];
        $mail = $_POST["mail"];
        $pass = $_POST["pass"];

        if(strlen($name) < 3 || strlen($name) > 10){
            $error = "文字数は２から１０文字にしてください";
        }
        
        if(filter_var($mail, FILTER_VALIDATE_EMAIL)){
            
        }else{
            $error = "メールアドレスを正しく入力してください";
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
        <input type="text" name="mail">
        <input type="text" name="pass">
        <button type="submit">送信</button>
    </form>

    <p><?= $error ?></p>

    <table>
        <tr>
            <th>名前</th>
            <th>メール</th>
        </tr>
        <tr>
            <td>aa</td>
            <td>aa</td>
        </tr>
    </table>
</body>
</html>