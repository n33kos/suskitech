<html>
	<head>
		<link href='style.css' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Share+Tech+Mono' rel='stylesheet' type='text/css'>
		<title>Suskitech | Invisibles Oracle</title>
		<meta name="description" content="An oracle made for zaporacle.com using excerpts from The Invisibles by Grant Morrison.">
		<meta name="keywords" content="suski,suskitech,invisibles,oracle,zap,jonathan,zaporacle,grant,morrison">
		<!-- Google Analytics -->
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-35128335-1', 'auto');
		  ga('send', 'pageview');
		</script>
	</head>
	<body>
	<?php include 'invisiblesOracle.php';?>
	<div class="bubble">
		<div class="refresher">
			<a href="http://<?php echo "$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"?>" title="Re-Cast Oracle"><img src="refresh.png"></a>
			<a href="http://<?php echo "$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"?>" title="Re-Cast Oracle">Re-Cast</a>
		</div>
		<h1 class="title">
			#<?php echo $ChosenOne;?>
		</h1>
		<h3 class="newhr">&#9830;&#9830;&#9830;</h3>
		<p class="content">
			<?php echo $LastVar;?>
		</p>
		<h3 class="newhr">&#9830;&#9830;&#9830;</h3>
	</div>
</body>
</html>