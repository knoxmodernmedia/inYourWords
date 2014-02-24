<?php

require ("class.inYourWords.1.1.0.php");

$words = new inYourWords($_POST['words']);
echo $words->output;

?>