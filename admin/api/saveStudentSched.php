<?php
require_once("config.php");
$tcode = $_POST['tcode'];
$tsubject_id = $_POST['tsubject_id'];
$tstudent_no = $_POST['studentno'];
$reg = $_POST['reg'];
$sem = $_POST['sem'];

$sql = "INSERT into tbl_eform (id,subject_id,code,student_no,date_registration,academic_year) values ('','$tsubject_id','$tcode','$tstudent_no','$reg','$sem')";
if (mysqli_query($conn, $sql)) {
    echo "inserted";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

?>