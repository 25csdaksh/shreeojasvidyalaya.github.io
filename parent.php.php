<?php
include 'config.php';
if($_SESSION['role']!="parent"){ die("Access denied"); }
?>
<h2>Parent Dashboard</h2>
<p>View student progress & payment</p>
<a href="logout.php">Logout</a>