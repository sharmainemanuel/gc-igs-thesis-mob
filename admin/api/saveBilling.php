<?php
 require_once("config.php");
$tuition = $_POST['tuition'];
$registration = $_POST['registration'];
$computer = $_POST['computer'];
$studno = $_POST['studno'];

$sql = "INSERT into tbl_billing (id,tuition_fee,registration_fee,lab_fee,student_no) values ('','$tuition','$registration','$computer','$studno')";
if (mysqli_query($conn, $sql)) {
    echo "inserted";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

?>