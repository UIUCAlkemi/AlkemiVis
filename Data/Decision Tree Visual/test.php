<?php
$resource = opendir("data");
while(($entry = readdir($resource)) !== FALSE) {
	if($entry != '.' && $entry != '..')
	echo $entry."<br/>";
}

?>