<?php
include 'config.php';
if($_SESSION['role']!="teacher"){ die("Access denied"); }
?>
<h2>Teacher Dashboard</h2>
<p>Upload Notes & Videos</p>
<a href="logout.php">Logout</a>