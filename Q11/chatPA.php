<?php
	extract($_GET);
	file_put_contents("chatPA.txt", $q.PHP_EOL, FILE_APPEND);
?>