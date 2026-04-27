<?

    $text = "非常に弱い";
    $error = "";
    if($_SERVER["REQUEST_METHOD"]==="POST"){
        $pass = $_POST["pass"];
        if(strlen($pass) < 8){
            
            $error = "パスワードは８文字以上である必要があります";
        }else{
            $count = 0;
            if(preg_match('/[a-z]/',$pass)) $count++;
            if(preg_match('/[A-Z]/',$pass)) $count++;
            if(preg_match('/[1-9]/',$pass)) $count++;
            if(preg_match('/[^a-zA-Z0-9]/',$pass)) $count++;
            
            if($count === 1){
                $text = "弱い";
            }else if($count === 2){
                $text = "中程度";
            }else if($count === 3){
                $text = "強い";
            }else if($count === 4){
                $text = "非常に強い";
            }
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
        パスワード:<input type="text" name="pass">
        <button type="submit">強度チェック</button>
    </form>
    <div><?= $text ?></div>
    <div><?= $error ?></div>
</body>
</html>