<?php
 require_once("config.php");

$subjectGrades = $_REQUEST['data'];

$arr = json_decode(json_encode($subjectGrades), true);
echo $arr;
foreach ($arr as $name => $value) {
    echo "$name: $value\n";
}
  
?>