<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crud_operation";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if(isset($_GET['fetch'])) {
    $sql = "SELECT * FROM user_details";
    $result = $conn->query($sql);

    $data = array();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    echo json_encode($data);
} else {
    $id = $_POST['id'];
    $name = $_POST['name'];

    if (isset($_POST['insert'])) {
          $sql = "INSERT INTO user_details (id,name) VALUES ('$id','$name')";
    } elseif (isset($_POST['update'])) {
          $sql = "UPDATE user_details SET name='$name' WHERE id=$id";
    } elseif (isset($_POST['delete'])) {
          $sql = "DELETE FROM user_details WHERE id=$id";
    }

    if ($conn->query($sql) === TRUE) {
         echo "Operation successful";
    } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>