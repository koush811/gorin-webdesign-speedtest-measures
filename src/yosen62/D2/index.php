<?php 
    $file = 'd2.json';
    $items = [];

    if(file_exists($file)){
        $json = file_get_contents($file);
        $items = json_decode($json,true);
        if(!is_array($items)){
            $items = [];
        }
    }

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $name = $_POST["name"] ?? "";
        $email = $_POST["email"] ?? "";
        $message = $_POST["message"] ?? "";

        $new = [
            "name" => $name,
            "email" => $email,
            "message" => $message
        ];

        $items[] = $new;

        file_put_contents(
            $file,
            json_encode($items, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
        );
        
        header("Location: index.php");
        exit;
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
        <input type="text" name="message">
        <button type="submit">Submit</button>
    </form>
</body>
</html>