<?php 
class Hexagram {

	public $number;
	public $title;
	public $unicodeCharacter;
	public $chineseTitle;
	public $upperTrigram;
	public $lowerTrigram;
	public $numbers;
	public $image;
	public $judgement;
	public $lines;
	public $normalizedAges;
	public $normalizedLines;

	function __construct($hexagram_value){
    	//$hexagram_value uses 6,7,8,9 notation
    	//"668976"

    	$this->normalizedAges = "";
		for ($i = 0; $i < strlen($hexagram_value); $i++) {
			if($hexagram_value[$i] == "6" || $hexagram_value[$i] == "9"){
				$this->normalizedAges .= "1";
			}else{
				$this->normalizedAges .= "0";
			}
		}

    	$this->normalizedLines = "";
    	for ($i = 0; $i < strlen($hexagram_value); $i++) {
    		if($hexagram_value[$i] == "6" || $hexagram_value[$i] == "7"){
    			$this->normalizedLines .= "0";
    		}else{
    			$this->normalizedLines .= "1";
    		}
    	}

		$this->numbers = $hexagram_value;
		$this->upperTrigram = iChing::interpretUpperTrigram($this->normalizedLines);
		$this->lowerTrigram = iChing::interpretLowerTrigram($this->normalizedLines);
		$this->title = iChing::interpretHexagram($this->normalizedLines);
		$this->chineseTitle = iChing::interpretChineseTitle($this->normalizedLines);
		$this->image = iChing::interpretImage($this->normalizedLines);
		$this->judgement = iChing::interpretJudgement($this->normalizedLines);
		$this->lines = iChing::interpretLines($this->normalizedLines, $this->normalizedAges);
		$this->unicodeCharacter = iChing::interpretUnicode($this->normalizedLines);
		$this->number = iChing::interpretNumber($this->normalizedLines);

		return $this;
	}

}