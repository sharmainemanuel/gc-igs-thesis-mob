<?php
    require_once("config.php");
    $id = $_REQUEST['studentno'];
    $sem = $_REQUEST['sem'];

    //$result = mysqli_query($conn, "SELECT * from tbl_payment where student_no = '$id' and semester = '$sem'");
    $result = mysqli_query($conn, "select p.or_no, p.amount, b.total_fee, p.semester from tbl_payment as p left JOIN tbl_billing as b on p.billing_id = b.id where p.student_no ='$id' and p.semester='$sem'");

   $info=[];
   while($data = mysqli_fetch_assoc($result)){
      array_push($info, $data);
   }
 
   echo json_encode($info);
?>