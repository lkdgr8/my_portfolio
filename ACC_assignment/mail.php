<?php
    // Connect to databse
    $conn = new mysqli("localhost", 'root', '', 'test');
    if($conn -> mysql_connectionerror) {
        echo "error" . mysql_connectionerror;
    }
    $name = $_POST['name'];
    $sql = "INSERT INTO `test` ('name') VALUES ('$name')";
    $result = query($conn, $sql);

    if ($result == true) {
        echo "message sent to database";
    }
?>