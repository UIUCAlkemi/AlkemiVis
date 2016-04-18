<?php

echo "<select name='files'>";
$files = array_map("htmlspecialchars", scandir("data"));
foreach ($files as $file)
	if($file != '.' && $file != '..')
    	echo "<option value='$file'>$file</option>";
echo "</select>";

?>