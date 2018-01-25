//To do:

//1. Identify needed global Variables	x
//2. Move all characters other than user's choice down to 
//   opponent section	√
//3. Select opponent to go down to melee
//4. Give user instructions. Alerts at every stage would be annoying.


// Game steps:

// 1. Move user-selected character down to player 1		√
// 2. Move all remaining characters to your opponents	√
// 3. Move user-selected character down to melee	x
// 4. On clicking the attack button, the user attacks the 
//    selected opponent, and that opponent retaliates
		// 4a. The user's player attacks, incrementing damage
		// 4b. The com retaliates

$(document).ready(function() {

//Global Variables:
var characters = [mario,kirby,dk,pikachu];

	//Mario stats
	var mario = {
	dam: 8,
	hp: 120,
	powerUp: 8,
	// stats: function(){
	// 	$("#mario")
	// }
	position: [],
	life: [],
	}
	// var marioStats = mario.attr($("#mario"))

	//Kirby stats
	var kirby = {
	dam: 4,
	hp: 180,
	powerUp: 4,
	position: [],
	life: [],
	}
	// var kirbyStats = kirby.attr($("#kirby"))

	//DK stats
	var dk = {
	dam: 10,
	hp: 100,
	powerUp: 10,
	position: [],
	life: [],
	}
	// var dkStats = dk.attr($("#dk"))

	//Pikachu stats
	var pikachu = {
	dam: 6,
	hp: 145,
	powerUp: 6,
	position: [],
	life: [],
	}
	// var pikaStats = pikachu.attr($("#pika"))

	var playerStats = {};
	var opponentStats = {};

	var isCharacterChosen = false;
	var hasNotPicked = true;
	var isEnemyChosen = false;

	function gameStart() {
		$("#mario").val(mario);
		$("#kirby").val(kirby);
		$("#dk").val(dk);
		$("#pika").val(pikachu);
		console.log($("#mario").val())
	};



	gameStart();

	//Reset
	// function reset() {
	// isCharacterChosen = false;
	// $("#player-one, #opponents, #current-opponent, #result").empty();
	// $(".character")appendTo(".char-possible");
 //  };

  //Reset button... Needs work
	// $("#start-over").on("click", function() {
	// 	reset();
	// 	console.log("reset");
	// });
		
	//Moves the chosen character to player 1
	//attribute disabled
	
	$(".character").on("click", function() {
		//just in case: if (hasNotPicked === true) {
		if (hasNotPicked) {
			$(this).appendTo("#player-one");
			//Assign the character's stats to playerStats object
			//How do I tell the console I want to assign the chosen
			//character's stats to playerStats?
			var yourPick = $("this").attr("ID");
			playerStats.push(yourPick);
			isCharacterChosen = true;
			moveThemDown();
			console.log($("#mario").val());
			console.log(playerStats);			
		}
		
	});
	

	//Moves non-chosen characters down to opponents section
	function moveThemDown() {
		if (isCharacterChosen) {
			$(".char-possible").appendTo("#opponents")
			hasNotPicked = false;
			console.log("they bounced");
			$(".character").addClass("bad-guys");
		}
	};

	// Move chosen opponent down to melee
	// function chooseFoe() {
	// 	if(isEnemyChosen) {
	// 	$(".character").attr("disabled", false);
	// 	$(this).appendTo("#current-opponent");
	// 	}
	// };

	// Move chosen opponent down to melee
	$(".bad-guys").on("click", function() {
		if (hasNotPicked = false) {
			$(this).appendTo("#current-opponent");
			console.log("You picked a foe")	
		}
			
	});

	 // What happens when the attack button is clicked
	 $(".attack").on("click", function() {

	 });
			
	 //Player attack
	 // function playerAttack(){
	 // 	//push characteristics into an empty object
	 // 	.attr(playerStats)
	 // 	opponentStats.hp -= playerStats.dam;
	 // 	playerStats.dam += playerStats.powerUp;
	 	
	 // }

	 //Foe attack
});

	

// $(".character").attr("disabled", false)

// $(".character").attr("disabled", true)


//Might be used... might go to graveyard... might include pseudocode...

//$(".character").removeAttr("disbled")

// if (playerHealth <= 0) {
// 	$("#game-over").text(show())
// }