<?  
    $pass = "pass1234";

    $hashed = password_hash($pass,PASSWORD_DEFAULT);

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $inputPass = $_POST["pass"];

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
        <input type="text" name="pass">
        <button type="submit">Submit</button>
    </form>
    <?php if(isset($inputPass)): ?>
    <?php if(password_verify($inputPass, $hashed)): ?>
        <div style="color: green;">一致</div>
    <?php else: ?>
        <div style="color: red;">不一致</div>
    <?php endif ?>
    <?php endif ?>
</body>
</html>