<?php
	if ($_SERVER['REQUEST_METHOD'] === 'POST')
	{
		$f = fopen('sports.txt', 'r');
		$line = fgets($f);
		fclose($f);
		extract($_POST);
		$vals = explode(';',$str);
		$totals = explode(';',$line);
		$storestr = [];
		for ($i = 0; $i<4; $i++)
		{
			$num1 = (int)$vals[$i];
			$num2 = (int)$totals[$i];
			$storestr[$i] = $num2-$num1;
		}
		echo implode(';', $storestr);
		$f = fopen('sports.txt', 'w');
		fwrite($f, implode(';', $storestr));
		fclose($f);
		echo "written";
	}
	else if ($_SERVER['REQUEST_METHOD'] === 'GET')
	{
		echo file_get_contents('sports.txt');
	}
?>