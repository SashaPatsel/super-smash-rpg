$(document).ready(function() {


	//Global Variables:
	var mario = {
			dam: 8,
			hp: 120,
			powerUp: 8,
	}

			//Kirby stats
	var kirby = {
			dam: 4,
			hp: 180,
			powerUp: 4,
	}

			//DK stats
	var dk = {
			dam: 10,
			hp: 100,
			powerUp: 10,
	}

			//Pikachu stats
	var pikachu = {
			dam: 6,
			hp: 145,
			powerUp: 6,
	}
	var playerStats;
	var opponentStats;
	var isCharacterChosen;
	var hasNotPicked;
	var isEnemyChosen;
	var mario;
	var kirby;
	var dk;
	var pikachu;
	var enemyDown;


	function gameStart() {

			playerStats ={};
			opponentStats = {};

			isCharacterChosen = false;
			isEnemyChosen = false;
			isFighting = false;
			gameDone = false;

			enemyDown = 0;
			//for(var m in mario) playerStats[m]=mario[m];
	};

	gameStart();

	$("#start-over").on("click", function() {
		gameStart();
		console.log("reset");		
	});


				// Move chosen opponent down to melee
				//This HAS to be written BEFORE the prior onClick
		$(".character").on("click", function() {
			if (!isCharacterChosen || isEnemyChosen || isFighting || gameDone) return;
				
				$(this).appendTo("#current-opponent");
				console.log("You picked a foe");

				if ($(this).is("#mario")) {
					for(var m in mario) opponentStats[m]=mario[m];
					$(this).addClass("melee-bg");
				}
				
				else if ($(this).is("#kirby")) {
					for(var k in kirby) opponentStats[k]=kirby[k];
					$(this).addClass("melee-bg");
				}	
				
				else if ($(this).is("#dk")) {
					for(var d in dk) opponentStats[d]=dk[d];
					$(this).addClass("melee-bg");
				}			

				else if ($(this).is("#pika")) {
					for(var p in pikachu) opponentStats[p]=pikachu[p];		
					$(this).addClass("melee-bg");	
				}	
				isEnemyChosen = true;
		});
		
		
		$(".character").on("click", function() {
				//the return code makes it so that it wont run this click
				// unless it happens before the other booleans become true
				if (isCharacterChosen || isEnemyChosen || isFighting || gameDone) return;
				//if this has an id of mario push marioStats to playerStats

				//Assigns character stats to user's player
				if ($(this).is("#mario")) {
					for(var m in mario) playerStats[m]=mario[m];
					console.log("It's a me");
					$(this).removeClass("character");
				}
				
				else if ($(this).is("#kirby")) {
					for(var k in kirby) playerStats[k]=kirby[k];
					console.log("I can fly")
					$(this).removeClass("character");
				}	
				
				else if ($(this).is("#dk")) {
					for(var d in dk) playerStats[d]=dk[d];
					console.log("Bananas")
					$(this).removeClass("character");
				}			

				else if ($(this).is("#pika")) {
					for(var p in pikachu) playerStats[p]=pikachu[p];
					console.log("PIIIIIIIKKAAAAAAACCCHHUUUU")
					$(this).removeClass("character");				
				}	

				// else { 
				// 	$(".bad-guys")
				// }	
				$(this).appendTo("#player-one");	
				moveThemDown();
				console.log(playerStats);
				isCharacterChosen = true;
				console.log(isCharacterChosen);
		});

		//Moves non-chosen characters down to opponents section
		function moveThemDown() {
				$(".char-possible").appendTo("#opponents")
				console.log("they bounced");
				// $("#opponents").addClass("bad-guys");
		};

		 // What happens when the attack button is clicked
		 $(".attack").on("click", function() {
		 	if (!isCharacterChosen || !isEnemyChosen || gameDone) return;
			 	opponentStats.hp -= playerStats.dam;
			 	playerStats.dam += playerStats.powerUp;
			 	playerStats.hp -= opponentStats.dam;

			 	$("#player-health").text(playerStats.hp);
			 	$("#player-damage").text(playerStats.dam);
			 	$("#opponent-health").text(opponentStats.hp);
			 	$("#opponent-damage").text(opponentStats.dam);

			 	if (opponentStats.hp <= 0){
			 		//delete fallen foe
				$(".melee-bg").remove();
			 	isEnemyChosen = false;
			 	opponentStats = {};	
			 	enemyDown++;	 		
			  }

			if (enemyDown === 3) {
				alert("congrats")
			}

		 	});


});



