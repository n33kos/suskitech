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

			$isSubmitted = false;
			if(isset($_GET["string"])){
				$theString = $_GET["string"];
			}
			if(isset($theString)){
				$isSubmitted = true;
			}

			if($isSubmitted == true):
				// create & initialize a curl session
				$curl = curl_init();

				// set our url with curl_setopt()
				curl_setopt($curl, CURLOPT_URL, "http://suskitech.org/ichingapi/?cast=yarrow");

				// return the transfer as a string, also with setopt()
				curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

				// curl_exec() executes the started curl session
				// $output contains the output string
				$result = json_decode(curl_exec($curl));

				// close curl resource to free up system resources
				// (deletes the variable made by curl_init)
				curl_close($curl);
		?>

			<h1>
				<?php echo $result->title; ?>
			</h1>

			<div class="hexagram">
				<?php
					for ($i = strlen($result->numbers) - 1; $i >= 0; $i--){
						switch ($result->numbers[$i]) {
							case '6':
								echo '<div class="oldyang">&nbsp;</div>';
								break;
							case '7':
								echo '<div class="yang">&nbsp;</div>';
								break;
							case '8':
								echo '<div class="yin">&nbsp;</div>';
								break;
							case '9':
								echo '<div class="oldyin">&nbsp;</div>';
								break;
							default:
								break;
						}
					}
				?>
			</div>

			<div class="trigrams">
				<div class="uppertrigram <?php echo $result->upperTrigram; ?>">
					<?php echo $result->upperTrigram; ?>
				</div>
				<div class="lowertrigram <?php echo $result->lowerTrigram; ?>">
					<?php echo $result->lowerTrigram; ?>
				</div>
			</div>

			<h3>The Judgement</h3>
			<p>
				<?php echo $result->judgement ?>
			</p>

			<h3>The Image</h3>
			<p>
				<?php echo $result->image ?>
			</p>

			<?php
				if (!empty($result->lines)) {
					echo '<h3>The Lines</h3>';
					echo '<p>';
					echo $result->lines;
					echo '</p>';
				}
			?>

			<br>
			<a href="/iching/"> < Back</a>

		<?php else: ?>

				<h3 class="text-center">Enter Your Query:</h3>

				<div class="row">
					<div class="col-sm-6 col-sm-offset-3">
						<form action="" class="text-center">
							<input class="form-control" name="string">
					</div>
					<div class="col-sm-4 col-sm-offset-4">
						<button class="btn btn-primary btn-block" type="submit">Cast</button>
					</form>
				</div>

		<?php endif; ?>

			<div class="full-width pull-left">
				<div class="colorcube Earth">&nbsp;</div>
				<div class="colorcube Mountain">&nbsp;</div>
				<div class="colorcube Water">&nbsp;</div>
				<div class="colorcube Wind">&nbsp;</div>
				<div class="colorcube Thunder">&nbsp;</div>
				<div class="colorcube Fire">&nbsp;</div>
				<div class="colorcube Lake">&nbsp;</div>
				<div class="colorcube Heaven">&nbsp;</div>
			</div>
		</div>
	</body>
</html>
