<?php
    $error = "";

    $date1 = $_GET["date1"] ?? '';
    $date2 = $_GET["date2"] ?? '';

    $days = 0;
    
    if($date1 && $date2){
        $ts1 = strtotime($date1);
        $ts2 = strtotime($date2);

        if($ts1 === false || $ts2 === false){
            $error = "Error";
        }else{
            $days = abs(($ts1 - $ts2) / 86400);
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
    <div><?php $error ?></div>

    <div><?php $days ?>日</div>
</body>
</html>