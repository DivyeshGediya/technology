<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
$technology = mysqli_connect('localhost', 'root', '', 'technology');
$f_name = '';
$l_name = '';
$user_name = '';
$email = '';
$password = '';

$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$user_name = $_POST['user_name'];
$email = $_POST['email'];
$password = $_POST['password'];
mysqli_query($technology, "INSERT INTO `singup_data` ( `f_name`, `l_name`, `user_name`, `email`,`password` ) VALUES ('$f_name','$l_name','$user_name','$email','$password')");
mysqli_query($technology, "INSERT INTO `login_data` ( `email`,`password` ) VALUES ('$email','$password')");
// echo $f_name, $l_name, $user_name, $email, $password;
// mysqli_query($technology,"INSERT INTO comment_box (name,commentText	) VALUES
//  ('$username','$comment')");

header('location: http://localhost:3000');
?>
