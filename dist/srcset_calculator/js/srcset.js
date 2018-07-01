jQuery(document).ready(function(){

	$('#originalScale, #originalWidth , #originalHeight').change(function(){
		og_scale = $('#originalScale').val();
		og_width = $('#originalWidth').val()/og_scale;
		og_height = $('#originalHeight').val()/og_scale;

		calculateSrcSet(og_scale,og_width,og_height);
	});

	function calculateSrcSet(og_scale,og_width,og_height){
		sets =
		[[ og_width * 1, og_height * 1 ],
		[ og_width * 1.5, og_height * 1.5],
		[ og_width * 2, og_height * 2],
		[ og_width * 3, og_height * 3],
		[ og_width * 4, og_height * 4]];

		for (var i = 0; i < sets.length; i++) {
			sets[i][0] = Math.floor(sets[i][0]);
			sets[i][1] = Math.floor(sets[i][1]);
		}
		renderSrcSet(sets);
	}

	function renderSrcSet(sets){
		els = [$('.x1'),$('.x15'),$('.x2'),$('.x3'),$('.x4')];
		nativescaleindex = $('#originalScale')[0].selectedIndex;
		for (var i = 0; i < els.length; i++) {
			els[i].find('span.width').html(sets[i][0]+"px");
			els[i].find('span.height').html(sets[i][1]+"px");
			if(i == nativescaleindex){
				els[i].removeClass("alert-info");
				els[i].addClass("alert-success");
			}else{
				els[i].addClass("alert-info");
				els[i].removeClass("alert-success");
			}
		}
		$('.exampleMarkup').html(
		'&lt;img src="http://placehold.it/' + sets[0][0] +'x'+ sets[0][1] + '" class="" alt="" srcset="<br>' +
		'http://placehold.it/' + sets[1][0] +'x'+ sets[1][1] + ' 1.5x,<br>' +
		'http://placehold.it/' + sets[2][0] +'x'+ sets[2][1] + ' 2x,<br>' +
		'http://placehold.it/' + sets[3][0] +'x'+ sets[3][1] + ' 3x,<br>' +
		'http://placehold.it/' + sets[4][0] +'x'+ sets[4][1] + ' 4x' +
		'<br>"&gt;'
		);
	}

});
