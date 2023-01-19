<?php
include_once("db_connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
  $request = json_decode($postdata);
  $name = trim($request->name);
  $username = trim($request->username);
  $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $mobile = trim($request->mobile);
  $password = mysqli_real_escape_string($mysqli, trim($request->password));


  $sql = "INSERT INTO users(name,username,email,mobile,password) VALUES('$name','$username','$email','$mobile','$password')";

if ($mysqli->query($sql)) {
  $data=array('message'=>'success');
  echo json_encode($data);
}
else {
  $data=array('message'=>'failed');
  echo json_encode($data);
}

}
?>
