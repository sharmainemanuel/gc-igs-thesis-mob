<?php


require_once("config.php");
$id = $_REQUEST['studentno'];
$semester = $_REQUEST['semester'];
$result = mysqli_query($conn, "SELECT * from tbl_eform where student_no = '$id' and academic_year = '$semester'");


   $info=[];
   while($data = mysqli_fetch_assoc($result)){
      array_push($info, $data);
   }
 
   echo json_encode($info);
?>