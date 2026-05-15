<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chessboard Table</title>
    <style>
        body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            background: #f3f3f3;
            font-family: sans-serif;
        }

        table {
            border-collapse: collapse;
        }

        td {
            width: 60px;
            height: 60px;
        }

        .light {
            background-color: white;
        }

        .dark {
            background-color: black;
        }
    </style>
</head>
<body>
    <table>
        <?php for ($row = 0; $row < 8; $row++): ?>
            <tr>
                <?php for ($col = 0; $col < 8; $col++): ?>
                    <?php if(($row+$col) %2 === 0): ?>
                        <td class="dark"></td>
                    <?php else: ?>
                        <td class="light"></td>
                    <?php endif ?>
                <?php endfor; ?>
            </tr>
        <?php endfor; ?>
    </table>
</body>
</html>