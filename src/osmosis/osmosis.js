jQuery(document).ready(function ($) {

	//------------------------------VARIABLES------------------------------
    var textstring;
    var textarray;
    var textScale;
    var nIntervId;
    var lettercolor;
    var wpm;
    var wpmMS;
    var wordspace = 0;
    var loopIt = true;
    var ispaused = false;
    var ishelpers;
    var punctuationcounter = 0;
    var wordlength;
    var leftoffset;
    var fadecounter;
    var fadelimit=5;

	//------------------------------FUNCTIONS------------------------------

    function OnLoad() {
        //IF GET DATA EXISTS, AUTOPLAY
        if(get_var.length > 1){$('#textPlace').val(get_var);ispaused = false;InitThatShit();}
        $('#colorPlace').ColorPicker({
            onChange: function (hsb, hex, rgb) {
                $('#spotmarker').css('background-color', '#' + hex);
                $('#colorLetter').css('color', '#' + hex);
                $('#colorPlace').val('#' + hex)
                lettercolor = '#' + hex;
            }
        });
        SetLineWidth();
    }
    OnLoad();

    function InitThatShit() {
    	textScale = $( "#sizePlace" ).val();
    	$('#centermaker').removeClass();
    	$('#centermaker').addClass(textScale);
        ishelpers = $('input:radio[name=helpers]:checked').val();
        SetLineWidth();
        SetHelpers();
    	wpm = $('#wpmPlace').val();
    	if(!wpm){wpm=250;$('#wpmPlace').val(wpm);}
    	wpmMS = 60000/wpm;
    	fadecounter = fadelimit;

    	CollectData();
    	nIntervId = clearInterval(nIntervId);
        nIntervId = setInterval(ChangeWord, wpmMS);
    }

    function ChangeWord() {
        if(!ispaused){
            if(punctuationcounter <= 0){

                if(textarray[wordspace].toLowerCase().indexOf(".") >= 0 || textarray[wordspace].toLowerCase().indexOf("?") >= 0 || textarray[wordspace].toLowerCase().indexOf(",") >= 0 || textarray[wordspace].toLowerCase().indexOf(";") >= 0 || textarray[wordspace].toLowerCase().indexOf("!") >= 0 || textarray[wordspace].toLowerCase().indexOf('"') >= 0){
                    punctuationcounter++;
                }

                var wordlength = 0;
                if(textarray[wordspace]){wordlength = textarray[wordspace].length;}
                var perfectspot = Math.ceil((wordlength / 2) - 1);
                var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                var finalval = replaceAt(textarray[wordspace], perfectspot, '<span style="color:'+lettercolor+';">' + oldletter + '</span>');
                $('#wordbox').html(finalval);

                var wordwidth = $( '#wordbox' ).width();
                switch(wordlength){
                    case 1:
                        var leftoffset = '-'+(wordwidth*.5)+'px';
                    break;
                    case 2:
                        var leftoffset = '-'+(wordwidth*.25)+'px';
                    break;
                    case 3:
                        var leftoffset = '-'+(wordwidth*.5)+'px';
                    break;
                    case 4:
                        var leftoffset = '-'+(wordwidth*.35)+'px';
                    break;
                    case 5:
                        var leftoffset = '-'+(wordwidth*.47)+'px';
                    break;
                    case 6:
                        var leftoffset = '-'+(wordwidth*.40)+'px';
                    break;
                    case 7:
                        var leftoffset = '-'+(wordwidth*.42)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 2);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span style="color:'+lettercolor+';">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                    break;
                    case 8:
                        var leftoffset = '-'+(wordwidth*.38)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 2);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span style="color:'+lettercolor+';">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                    break;
                    case 9:
                        var leftoffset = '-'+(wordwidth*.31)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 3);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span style="color:'+lettercolor+';">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                    break;
                    case 10:
                        var leftoffset = '-'+(wordwidth*.29)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 3);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span style="color:'+lettercolor+';">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                    break;
                    case 11:
                        var leftoffset = '-'+(wordwidth*.35)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 3);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span style="color:'+lettercolor+';">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                    break;
                    default:
                        var leftoffset = '-'+(wordwidth*.35)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 3);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span style="color:'+lettercolor+';">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                }
                $('#wordbox').css('left', leftoffset);

                wordspace++;
                if(wordspace >= textarray.length && loopIt == true) {
                    wordspace = 0;
                }
            }else{
                punctuationcounter--;

            }

        }
        fadecounter++;
        if(fadecounter >= fadelimit){
            $('#settingsPanel').fadeOut('slow');
        }
    }

    function CollectData() {
        textstring = $('#textPlace').val();
        textarray = textstring.replace(/\s{2,}/g, ' ').split(' ');
	    return textarray, wpm, wpmMS;
    }

    function PauseUnpause(){
        ispaused = !ispaused;
        SetLineWidth();
    }

    // replace the 'n'th character of 's' with 't'
    function replaceAt(s, n, t) {
        return s.substring(0, n) + t + s.substring(n + 1);
    }

    function SetHelpers(){
        switch(ishelpers){
            case 'on':
                $('#lines').fadeIn();
                $('#spotmarker').fadeIn();
            break;
            case 'off':
                $('#lines').fadeOut();
                $('#spotmarker').fadeOut();
            break;
            default:
        }
    }

    function SetLineWidth(){
        textScale = $( "#sizePlace" ).val();
        var winmaster = $( window ).width();

        if(textScale == 'largest'){
            winmaster = winmaster/4;
        }else if(textScale == 'large'){
            winmaster = winmaster/3;
        }else if(textScale == 'medium'){
            winmaster = winmaster/2;
        }else{
            winmaster = winmaster;
        }
        $('#lines').css('width', winmaster+'px').css('left','-'+(winmaster/2)+'px');
        $('#whitebg').css('width', winmaster+'px').css('left','-'+(winmaster/2)+'px');
    }

	//------------------------------LISTENERS------------------------------
    $('#textPlace').focus(function( event ) {
        fadecounter=0;
        $('#settingsPanel').show();
    });
    $('#wpmPlace').focus(function( event ) {
        fadecounter=0;
        $('#settingsPanel').show();
    });
    $('#sizePlace').focus(function( event ) {
        fadecounter=0;
        $('#settingsPanel').show();
    });

    $(window).mousemove(function( event ) {
        fadecounter=0;
        $('#settingsPanel').show();
    });

    //prevent form submission
    $('#settingsPanel').submit(function (evt) {
        evt.preventDefault();
        ispaused = false;
        InitThatShit();
    });

    //on click within body
    $('body').click(function(e){
        var theID = $(e.target).attr('id');
        var theClass = $(e.target).attr('class');
        if(theID != 'wpmPlace' && theID != 'sizePlace' && theClass != 'colorpicker' && theID != 'colorPlace' && theID != 'textSubmit' && theID != 'textPlace'){
            PauseUnpause();
        }
    });

    //On keypress
    $(window).keypress(function(e) {
        //on spacebar or 'P'
        if (e.keyCode == 0 || e.keyCode == 32 || e.keyCode == 80) {
            PauseUnpause();
        }
    });

    //on window resize
    $( window ).resize(function() {
        SetLineWidth();
    });

});
