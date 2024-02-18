<?php
    $conn = new mysqli("68.178.150.226","santosh_s","dku^U,N1jYa8","5wn");
    
    if ($conn -> connect_errno) {
      echo "Failed to connect to MySQL: " . $conn -> connect_error;
      exit();
    }
?>