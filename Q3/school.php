<?php
	if($_SERVER['REQUEST_METHOD']==="GET")
	{
		echo "<script type='text/javascript'>";
		
		extract($_GET);
		if($USN == "004")
			echo "parent.f1.display(\"<span class='v'>Valid</span>\")" ;
		else
			echo "parent.f1.display(\"<span class='i'>In valid</span>\")" ;
		echo "</script>";
	}
?>