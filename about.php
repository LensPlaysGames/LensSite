<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>About Lens</title>
	<link rel="stylesheet" href="CSS/StyleSheet1.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
	<div id="div_header" class="head">
		<?php include_once 'header.php' ?>
	</div>

	<div class="flexrow">
		<div id="div_sidebar" class="sidebar">
			<?php include_once 'sidebar.php' ?>
		</div>

		<div id="div_content" class="content flexrow">
			<div class="contenttxt wide100 txtindent">
				<h1><cite>Lens</cite></h1>
				<span class="txtxlrg">That's Me! And this is my website! And this is getting too meta!</span>
				<ul class="nopadding txtnoindent">
					<li>
						<p class="txtindent nobtmpadding">
							I'm an artist, primarily. I make music that I
							<a href="https://push.fm/fl/ftc">release online</a>, and I have fun doing it :D. <br />
							<cite>If you like RAPPITY RAP, gimme a listen, no CAPPITY CAP</cite> <br />
							If you like dem BARS, play me in your CARS <br />
							If you can't stand POP, Blast me through your speakers down the BLOCK <br />
							If you can't stand RADIO, PLAY MY WHOLE discography <br />
							If you can't really READ MY FLOW, click the link to HEAR IT GO <br />
							Off like a quilt is or something like that or SO
						</p>
					</li>
					<li>
						<p class="txtindent nobtmpadding">
							In my spare time, I like to keep busy, so I have started learning all different sorts of programming skills! <br />
							<cite>Like: Game Dev (Unity in C#), Web Dev (HTML, CSS, JS, PHP), and Console Applications for Mathematical Purposes</cite>
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div id="div_footer" class="foot flexrow">
		<?php include_once 'footer.php' ?>
	</div>

	<script src="JS/header.js"></script>
	<script src="JS/sidebar.js"></script>
</body>

</html>