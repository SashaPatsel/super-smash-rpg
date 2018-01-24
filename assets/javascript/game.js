//To do:

//1. Identify needed global Variables	x
//2. Move all characters other than user's choice down to 
//   opponent section	x
//3. Select opponent to go down to melee
//4. 


$(document).ready(function() {

//Global Variables:

	//Mario stats
	var marioDam = 20;
	var marioHP = 120;

	//Kirby stats
	var kirbyDam = 15;
	var kirbyHp = 180;

	//DK stats
	var dkDam = 30;
	var dkHP = 100;

	//Pikachu stats
	var pikaDam = 25;
	var pikaHP = 145;

	var isCharacterChosen = false;
	var hasNotPicked = true;

	//Reset
	// function reset() {
	// isCharacterChosen = false;
	// $("#player-one, #opponents, #current-opponent, #result").empty();
	// $(".character")appendTo(".char-possible");
 //  };

  //Reset button... Needs work
	$("#start-over").on("click", function() {
		reset();
		console.log("reset");
	});
		
	//Moves the chosen character to player 1
	//attribute disabled
	
	$(".character").on("click", function() {
		if (hasNotPicked === true) {
			$(this).appendTo("#player-one");
			isCharacterChosen = true;
			moveThemDown();
			$(".character").attr("disabled", true)

		}
		else {

		}
		
	});
	

	//Moves non-chosen characters down to opponents section
	function moveThemDown() {
		if (isCharacterChosen) {
			$(".char-possible").appendTo("#opponents")
			hasNotPicked = false;
			console.log("they bounced")
		}
	};

});





//Might be used... might go to graveyard... might include pseudocode...

//$(".character").removeAttr("disbled")

// if (playerHealth <= 0) {
// 	$("#game-over").text(show())
// }