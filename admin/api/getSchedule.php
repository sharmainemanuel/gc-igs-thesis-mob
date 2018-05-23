<?php
require_once("config.php");

if(isset($_REQUEST['semester'])){
    $id = $_REQUEST['studentno'];
    $semester = $_REQUEST['semester'];
    $result = mysqli_query($conn, "SELECT * from tbl_eform left join tbl_schedule on tbl_eform.code = tbl_schedule.code where tbl_eform.student_no = '$id' and tbl_eform.semester = '$semester'");
    
}
else if(isset($_REQUEST['regdate'])){
    $id = $_REQUEST['studentno'];
    $regdate = $_REQUEST['regdate'];
    $result = mysqli_query($conn, "SELECT * from tbl_eform where student_no = '$id' and date_regist = '$regdate'");
    
}
else{

    $code = $_REQUEST['code'];
    $result = mysqli_query($conn, "SELECT * from tbl_schedule left join tbl_subjects on tbl_schedule.subject_id = tbl_subjects.id  where code = '$code'");
    
}

   $info=[];
   while($data = mysqli_fetch_assoc($result)){
   array_push($info, $data);
    
    }
   echo json_encode($info);
?>