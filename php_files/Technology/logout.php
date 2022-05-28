<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
$technology = mysqli_connect('localhost', 'root', '', 'technology');
mysqli_query($technology, "DELETE FROM `login_data`");
echo 'done';
// header('location: http://localhost:3000');
?>