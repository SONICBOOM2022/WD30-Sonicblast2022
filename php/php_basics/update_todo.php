<?php
include('db.php');
$connect = dbConnect();

$sql = "SELECT * FROM todo WHERE id = $_GET[todoId]";
$query = mysqli_query($connect, $sql);

$todo = mysqli_fetch_assoc($query);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Todo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <form action="todo_validate.php?method=edit" method="POST">
                <label for="todo">Update Todo:
                    <input type="hidden" name="todoId" value="<?php echo $todo['id']; ?>">
                    <input type="text" name="todo" value="<?php echo $todo['task']; ?>">
                    <button type="submit">Update</button>
                </label>
            </form>
        </div>
    </div>
</body>
</html>