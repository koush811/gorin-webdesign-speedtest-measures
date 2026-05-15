<?php
    session_start();

    if(!isset($_SESSION["count1"])){
        $_SESSION["count1"] = 0;
    }
    if(!isset($_SESSION["count2"])){
        $_SESSION["count2"] = 0;
    }
    if(!isset($_SESSION["count3"])){
        $_SESSION["count3"] = 0;
    }

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        if(isset($_POST["prass1"])){
            $_SESSION["count1"] +=1 ;
        }
        if(isset($_POST["mai1"])){
            $_SESSION["count1"] -= 1;
        }

        if(isset($_POST["prass2"])){
            $_SESSION["count2"] +=1 ;
        }
        if(isset($_POST["mai2"])){
            $_SESSION["count2"] -= 1;
        }

        if(isset($_POST["prass3"])){
            $_SESSION["count3"] +=1 ;
        }
        if(isset($_POST["mai3"])){
            $_SESSION["count3"] -= 1;
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
    <div>
        <form action="" method="post">
            <button type="submit" name="prass1">+</button>
        </form>
        <form action="" method="post">
            <button type="submit" name="mai1">-</button>
        </form>
        <div><?= $_SESSION["count1"] ?></div>
    </div>

    <div>
        <form action="" method="post">
            <button type="submit" name="prass2">+</button>
        </form>
        <form action="" method="post">
            <button type="submit" name="mai2">-</button>
        </form>
        <div><?= $_SESSION["count2"] ?></div>
    </div>

    <div>
        <form action="" method="post">
            <button type="submit" name="prass3">+</button>
        </form>
        <form action="" method="post">
            <button type="submit" name="mai3">-</button>
        </form>
        <div><?= $_SESSION["count3"] ?></div>
    </div>
    
    
</body>
</html>