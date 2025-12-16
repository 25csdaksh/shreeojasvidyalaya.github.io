<?php include 'config.php'; ?>
<form method="post">
Email: <input type="email" name="email"><br>
Password: <input type="password" name="password"><br>
<button name="login">Login</button>
</form>
<?php
if(isset($_POST['login'])){
    $email=$_POST['email'];
    $pass=$_POST['password'];
    $q = mysqli_query($conn,"SELECT * FROM users WHERE email='$email' AND password='$pass'");
    if(mysqli_num_rows($q)>0){
        $data = mysqli_fetch_assoc($q);
        $_SESSION['role']=$data['role'];
        $_SESSION['paid_until']=$data['paid_until'];
        if($data['role']=="student") header("location:student.php");
        if($data['role']=="teacher") header("location:teacher.php");
        if($data['role']=="parent") header("location:parent.php");
    } else {
        echo "Invalid login";
    }
}
?>