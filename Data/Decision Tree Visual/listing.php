<?php

$resource = opendir("data");

while(($entry = readdir($resouce)) !== FALSE) {
	echo $entry."<br/>";
}

?>