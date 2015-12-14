<?php
	extract($_GET);
	file_put_contents("chatPB.txt", $q.PHP_EOL, FILE_APPEND);
?>