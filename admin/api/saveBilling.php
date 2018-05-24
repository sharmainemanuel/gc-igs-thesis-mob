<?php
 require_once("config.php");
$tuition = $_POST['tuition'];
$registration = $_POST['registration'];
$labfee = $_POST['labfee'];
$computer = $_POST['computer'];
$studno = $_POST['studno'];
$misc = $_POST['misc'];
$hrm = $_POST['hrm'];
$sem = $_POST['sem'];
$totalFee = $_POST['totalFee'];


$sql = "INSERT into tbl_billing (id,tuition_fee,registration_fee,lab_fee,comlab_fee,misc_fee,hrm_fee,total_fee,semester,student_no) values ('','$tuition','$registration','$labfee','$computer','$misc','$hrm','$totalFee','$sem','$studno')";
if (mysqli_query($conn, $sql)) {
    echo "inserted";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

?>