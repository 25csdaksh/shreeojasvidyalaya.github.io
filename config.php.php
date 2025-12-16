<?php
$conn = mysqli_connect("localhost","root","","ojas_school");
if(!$conn){
    die("Database connection failed");
}
session_start();
?>