<?php
$files = array();
$resource = opendir("data");
while(($entry = readdir($resource)) !== FALSE) {
	if($entry != '.' && $entry != '..')
		array_push($files, $entry);
}

echo json_encode($files);

?>