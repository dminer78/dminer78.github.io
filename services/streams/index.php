<?php
    $files = scandir('.');
    foreach($files as $file) {
        if (strlen($file) > 3 && $file != basename($_SERVER['PHP_SELF'])) {
          echo "<a href=", $file, ">", $file, "</a>\n";
        }
    }
?> 