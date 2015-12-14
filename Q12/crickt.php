<?php
	extract($_GET);
	$file = fopen("crickt.txt","r");
	$arr = [];
	$i = 0;
	header("Content-type:text/json");
	while(($line = fgets($file))!= false)
	{
		$parts = explode(":", trim($line));
		if($parts[1]==$c)
		{
			$arr[$i] = ["name" => $parts[0], "country" => $parts[1], "matches" => $parts[2], "runs" => $parts[3], "centuries" => $parts[4]];
			$i++;
		}
	}
	echo json_encode($arr);
?>