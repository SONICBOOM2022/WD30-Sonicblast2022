<?php
include('db.php');
$connect = dbConnect();

$method = $_GET['method'];

switch($method) {
    case 'delete':
        if(isset($_GET['todoId'])) {
            $todo = $_GET['todoId'];
            $sql = "DELETE FROM todo WHERE id = $todo";
            if(mysqli_query($connect, $sql)) {
                header('Location: todo.php');
            }else{
                echo "An error occured.";
            }
        }
        break;
    case 'add':
        if(isset($_POST['todo'])) {
            $todo = strip_tags($_POST['todo']);

            
            $sql = $connect->prepare("INSERT INTO todo(task) VALUES (?)");
            $sql->bind_param("s", $todo);
        
            if($sql->execute()) {
                echo "Todo Added!";
                header('Location: todo.php');
            }else{
                echo "An error occured.";
            }
        }
        break;
    case 'edit':
        if(isset($_POST['todoId'])) {
            $todoId = $_POST['todoId'];
            $todo = $_POST['todo'];
            $sql = "UPDATE todo SET task = '$todo' WHERE id = $todoId";
            if(mysqli_query($connect, $sql)) {
                header('Location: todo.php');
            }else{
                echo "An error occured.";
            }
        }
    default:
        echo "Unknown Method.";
}


?>