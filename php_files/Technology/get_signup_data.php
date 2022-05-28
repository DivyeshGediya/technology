<?php
 header('Access-Control-Allow-Origin: http://localhost:3000');
 $technology = mysqli_connect('localhost', 'root', '', 'technology');
 $sth = mysqli_query($technology, "SELECT * from `singup_data`");
 $rows = array();
 while($r = mysqli_fetch_assoc($sth)) {
     $rows[] = $r;
 }
 print json_encode($rows);
?>