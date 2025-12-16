<?php
include 'config.php';
if($_SESSION['role']!="student"){ die("Access denied"); }
if(strtotime($_SESSION['paid_until']) < time()){
    echo "Payment expired. Please renew.";
    exit;
}
?>
<h2>Student Dashboard</h2>
<ul>
<li>Maths</li>
<li>Science</li>
<li>Social Science</li>
<li>English</li>
</ul>
<a href="logout.php">Logout</a>