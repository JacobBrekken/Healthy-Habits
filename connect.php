<?php
   $name = $_POST['name'];
   $email = $_POST['email'];
   $password = $_POST['password'];

   //Database connection
   $conn = new sqli('127.0.0.1','root','','test');
   if($conn->connect_error){
      die('Connection Failed  : ' . $conn->connect_error);
   }else{
      $stmt = $conn->prepare("insert into registration(name, email, password)
         values(?,?',?)");
      $stmt->bind_param("sss",$name,$email,$password);
      $stmt->execute();
      echo "Registration Successfully...";
      $stmt->close();
      $conn->close();
   }
?>