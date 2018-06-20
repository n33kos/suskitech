<html>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Ubuntu+Mono' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
		<link href='style.css' rel='stylesheet' type='text/css'>
		<title>Suskitech | iChing</title>
		<meta name="description" content="An iChing oracle using excertps from the Wilhelm-Baynes translation of the book of changes.">
		<meta name="keywords" content="suski,suskitech,oracle,iching,changes,book,ancient">
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
		<?php
			if(!isset($_GET["string"])){
				echo '<h1 class="siteTitle"><a href="http://www.suskitech.org/" title="suskitech.org">Suskitech | iChing</a></h1>';
				echo '<div class="container margin-bottom-15 supercenter">';
			}else{
				echo '<div class="container margin-bottom-15">';
			}
		?>
			<?php
				$isSubmitted = false;
				if(isset($_GET["string"])){
					$theString = $_GET["string"];
				}
				if(isset($theString)){
					$isSubmitted = true;
				}

				if($isSubmitted == true){
					//GET string var from url
					$getURLarg = " " . $_GET["string"];
					//escape statement for shell
					$command = escapeshellcmd('python PhPyChing.py' . (string)$getURLarg);
					//execute command plus string var as argument
					$output = shell_exec($command);
					//Print the results from python
					echo $output;
					echo '<br><a href="/iching/"> < Back</a>';
				}else{
					echo '<h3 class="text-center">Enter Your Query:</h3><div class="row"><div class="col-sm-6 col-sm-offset-3"><form action="" class="text-center"><input class="form-control" name="string"></div><div class="col-sm-4 col-sm-offset-4"><button class="btn btn-primary btn-block" type="submit">Cast</button></form></div>';	
				}
			?>
			<div class="full-width pull-left">				
				<div class="colorcube Earth">&nbsp;</div>
				<div class="colorcube Mountain">&nbsp;</div>
				<div class="colorcube Water">&nbsp;</div>
				<div class="colorcube Wood">&nbsp;</div>
				<div class="colorcube Thunder">&nbsp;</div>
				<div class="colorcube Fire">&nbsp;</div>
				<div class="colorcube Lake">&nbsp;</div>
				<div class="colorcube Heaven">&nbsp;</div>
			</div>
		</div>
	</body>
</html>
