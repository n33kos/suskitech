<!DOCTYPE html>
<html>
	<head>
		<title>The Suski Times | All The Best News</title>
		<link rel="stylesheet" type="text/css" href="./css/styles.css">
		<link href="https://fonts.googleapis.com/css?family=IM+Fell+English+SC" rel="stylesheet">
	</head>
	<body>
		<h1 class="center">The Suski Times</h1>
		<hr class="thick">
		<hr class="thin">
		<h2 class="center">
			<?php echo date('l jS \of F Y'); ?>
		</h2>
		<hr class="thin">
		<hr class="thick">
		<div class="content">
			<?php
				$all_articles = array();
				$sources = array("ars-technica","bbc-news","engadget","google-news","hacker-news","national-geographic","new-scientist","polygon","reuters","techcrunch","time");
			    $curl = curl_init();

				/*---------------Get Sources-----------------
				curl_setopt_array($curl, array(
				    CURLOPT_RETURNTRANSFER => 1,
				    CURLOPT_URL => 'https://newsapi.org/v1/sources?language=en&apiKey=7b86af68c7524f8d8d369464cf361ebe'
				));
			    $resp = json_decode(curl_exec( $curl ));

			    foreach ( $resp as $key => $value) {
			    	foreach ( $value as $sourcekey => $sourceVal) {
			    		echo $sourceVal->id."<br>";
			    		echo $sourceVal->description.'<br><br>';
			    	}
			    }
		    	*/
		    	

		    	//----------get articles-------------
		    	foreach ( $sources as $sourcekey => $sourceVal) {
					curl_setopt_array($curl, array(
						CURLOPT_RETURNTRANSFER => 1,
						CURLOPT_URL => "https://newsapi.org/v1/articles?source=".$sourceVal."&sortBy=latest&apiKey=7b86af68c7524f8d8d369464cf361ebe"
					));
					$resp2 = json_decode(curl_exec( $curl ));
		    		foreach ($resp2->articles as $key2 => $value2) {
		    			$value2->source = $sourceVal;
		    			$all_articles[] = $value2;
		    		}
		    	}

		    	usort($all_articles, function($a,$b){return strcmp($a->title, $b->title);});
		    	foreach ($all_articles as $key => $value) {
		    		$date = new DateTime($value->publishedAt);
					echo "<article>";
					if($value->urlToImage){
						echo "<img class=\"article-img pull-left block\" src=\"{$value->urlToImage}\" alt=\"Image For {$value->title}\">";
					}
					echo 	"<h3><a href=\"{$value->url}\" title=\"{$value->title}\">{$value->title}</a></h3>";
					echo 	"<p>{$value->description}<br><small>({$date->format('l F jS, Y')} | {$value->source})</small></p>";
					echo "</article>";
		    	}
		    	

			    curl_close( $curl );

			?>
		</div>
	</body>
</html>