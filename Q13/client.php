<?php
	extract($_GET);
	if ($method == "create")
	{
		$data = http_build_query(array("method"=>"PUT","usn"=>$_GET["usn"],"name"=>$_GET["name"]));
		$stream = stream_context_create(
			array(
				"http" => array(
							"method" => "PUT",
							"header" => array("Content-type:application/x-www-form-urlencoded"),
							"content" => $data
						  )
			)
		);
		echo file_get_contents("http://localhost/Labs/Q13/create",FALSE,$stream);
	}
	else if ($method == "read")
	{
		echo "http://localhost/Labs/Q13/read/".$usn;
		echo file_get_contents("http://localhost/Labs/Q13/read/".$usn);
	}
	else if ($method == "update")
	{
		$data = http_build_query(array("method" => "POST", "usn"=>$usn ));
		$stream = stream_context_create(
			array(
					"http" => array(
							"method" => "POST",
							"header" => array("Content-type:application/x-www-form-urlencoded"),
							"content" => $data
						)
				)
			);
		echo file_get_contents("http://localhost/Labs/Q13/update",FALSE,$stream);
	}
?>