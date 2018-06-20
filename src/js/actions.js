jQuery(document).ready(function($){

	//----------------------Email Obfuscation-------------------
	String.prototype.hexDecode = function(){
		var j;
		var hexes = this.match(/.{1,4}/g) || [];
		var back = "";
		for(j = 0; j<hexes.length; j++) {
			back += String.fromCharCode(parseInt(hexes[j], 16));
		}

		return back;
	}
	$('body').find('.site-email-address').attr('href', 'mailto:'+$('.site-email-address').data('email').hexDecode()+'@'+$('.site-email-address').data('domain').hexDecode());

});
