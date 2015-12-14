<?php
	header("Content-Type: text/event-stream");
	header("Cache-Control: no-cache");
	ob_start();
	$filename = "chatPA.txt";
	$time = filemtime($filename);
	while (true) {
		
		clearstatcache();
		if(filemtime($filename)>$time){
			$lines = file($filename);
			$line = $lines[count($lines)-1];
			echo "data: $line\n\n";
			ob_flush();
			flush();
			$time = filemtime($filename);
		}
		sleep(1);
	}
?>