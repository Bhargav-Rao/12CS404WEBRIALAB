<?php

	header("Content-type:text/xml");
	extract($_GET);
	echo file_get_contents("http://www.bing.com/search?q=$s&format=rss");
?>