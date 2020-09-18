<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Language of Lens</title>
		<link rel="stylesheet" href="CSS/StyleSheet1.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	</head>

	<body>
		<div id="div_header" class="head"> <?php include_once 'header.php' ?></div>

		<div class="flexrow">
			<div id="div_sidebar" class="sidebar"> <?php include_once 'sidebar.php' ?> </div>

			<div id="div_content" class="content flexrow">
				<div class="contentcont">
					<?php include 'GetRandomImage-picsum.php' ?>
					<span class="txtcenter" style="padding-top: 18px;">Random Picture!</span>
				</div>
				<div class="contenttxt wide27">
					<h1><cite>Lens Sipsum</cite></h1>
					<span class="txtindent hugepadding notoppadding">And Thy was Made. <br /><br />
					In the flash of A past, all the smoke I was hiding behind fell out of the air into a dust that coated the ground an inch at a time <br /><br />
					If I could see the end I would choose it. Why? <br /><br />
					Maybe the work ain't worth the payout <br /><br />
					Maybe the couch ain't catch your ass now <br /><br />
					Maybe thy house drives crazy in his brain now <br /><br />
					Maybe the life will drain from thee any day now</span>
				</div>
			</div>
		</div>

		<div id="div_footer" class="foot flexrow"> <?php include_once 'footer.php' ?></div>

		<script src="JS/header.js"></script>
		<script src="JS/sidebar.js"></script>
	</body>

</html>