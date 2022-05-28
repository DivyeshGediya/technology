<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
$technology = mysqli_connect('localhost', 'root', '', 'technology');
echo $_POST['email'];
echo $_POST['password'];
$email = $_POST['email'];
$password = $_POST['password'];
mysqli_query($technology, "INSERT INTO login_data ( email,password ) VALUES ('$email','$password')");
// header('location: http://localhost:3000');
?>