<?php
    require_once("config.php");
    $id = $_REQUEST['studentno'];
    $sem = $_REQUEST['sem'];
    $result = mysqli_query($conn, "SELECT * from tbl_billing where student_no = '$id' and semester = '$sem'");

   $info=[];
   while($data = mysqli_fetch_assoc($result)){
      array_push($info, $data);
   }
 
   echo json_encode($info);
?>