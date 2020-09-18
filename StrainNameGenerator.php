<!DOCTYPE html>

<html>

<head>
	<title>Strain Gen by Lens</title>
	<link rel="stylesheet" href="CSS/StyleSheet1.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
	<div id="div_header" class="head"> <?php include_once 'header.php' ?></div>
	<div class="flexrow">
		<div id="div_sidebar" class="sidebar">
			<?php include_once 'sidebar.php' ?>
		</div>
		<div id="div_content" class="content flexrow">
			<div class="content">
				<form name="Generation Buttons">
					<input
						type="button"
						name="btn_generatestrain"
						id="btn_generatestrain"
						value="Generate New Strain"
						class="buttonnoresize txtxlrg"
						style="height: 90px;" />
					<br />
					<input
						type="button"
						name="btn_liststrains"
						id="btn_liststrains"
						value="List All Strain Names"
						class="buttonnoresize txtxlrg"
						style="height: 90px;" />
				</form>
			</div>
			<div id="strainname" class="contenttxt lrgpadding txthuge wide100"></div>
		</div>
	</div>

	<div id="div_footer" class="foot flexrow"> <?php include_once 'footer.php' ?></div>
	<script src="JS/header.js"></script>
	<script src="JS/sidebar.js"></script>
	<script src="JS/strains.js"></script>
</body>
</html>