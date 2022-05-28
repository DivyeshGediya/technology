<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
$technology = mysqli_connect('localhost', 'root', '', 'technology');
$name = $_POST['name'];
$comment = $_POST['comment'];
mysqli_query($technology, "INSERT INTO comment_box ( name,commentText ) VALUES ('$name','$comment')");
// header('location: http://localhost:3000');
