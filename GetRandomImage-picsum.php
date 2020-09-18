<?php
$seed = mt_rand(0, 999999999) . '/';

$width = mt_rand(200, 400) . '/';
$height = mt_rand(200, 400);

$grayscale = "";
$gray = mt_rand(0, 2);
if ($gray == 0) {
	global $grayscale;
	$grayscale = "?grayscale";
	$grayscalemsg = "<br /> <cite><small>" . str_replace('?', '', $grayscale) . "</small></cite>";
}

$picsumurl = 'https://picsum.photos/seed/';

$url = $picsumurl . $seed . $width . $height . $grayscale;

echo "<a href='" . $url . "' ><img src='" . $url . "' /> </a>";
echo $grayscalemsg;
?>