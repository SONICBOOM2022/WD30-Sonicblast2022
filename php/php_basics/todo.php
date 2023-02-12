<?php
include('db.php');
$connect = dbConnect();

$sql = "SELECT * FROM todo";
$query = mysqli_query($connect, $sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="card">
            
            <?php echo isset($_POST['todo']) ? $_POST['todo'] : 'Key non existent'; ?>
            <form action="todo_validate.php?method=add" method="POST">
                <label for="todo">New Todo:
                    <input type="text" name="todo">
                    <button type="submit">Add</button>
                </label>
            </form>
            <hr />
            <ul>
                <?php
                    if(mysqli_num_rows($query) > 0) {
                        while($row = mysqli_fetch_assoc($query)) {
                            echo "<li>$row[task]
                            <div>
                                <a href='todo_validate.php?method=delete&todoId=$row[id]'>❌</a>
                                <a href='update_todo.php?todoId=$row[id]'>✏️</a>
                            </div>
                            </li>";
                        }
                    }else{
                        echo "<li>No result</li>";
                    }
                ?>
            </ul>
        </div>
    </div>
</body>
</html>