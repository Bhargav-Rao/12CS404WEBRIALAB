<?php
	$con = mysql_connect("127.0.0.1","root","password");
	mysql_select_db("test");
	extract($_GET);
	if($method == "create")
	{
		parse_str(file_get_contents("php://input"));
		$res = mysql_query("INSERT INTO data VALUES ('$usn','$name');");
		echo json_encode(['success' => $res]);
	}
	else if ($method == "read")
	{
		echo json_encode(mysql_fetch_assoc(mysql_query("SELECT * FROM data WHERE usn='$usn';")));
	}
	else if ($method == "update")
	{
		parse_str(file_get_contents("php://input"));
		$res = mysql_query("UPDATE data SET name = '$name' WHERE usn = '$usn';");
		echo json_encode(['success' => $res]);
	}
?>