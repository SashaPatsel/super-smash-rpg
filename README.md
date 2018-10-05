<h1 align="center">👾 Super Smash Bros RPG Game👾</h1>

Super Smash Bros Game is an RPG Strategy Game.

When you start, you can pick any of the four players on the screen. 

Once you've chosen your character, you can pick an opponent to fight against. In the example below, Mario was chosen as player 1, and the first opponent to fight is DK. 

When you defeat an opponent, you can pick from any of the remaining foes. 

You win if you vanquish all the availbale enemies. Watch out though. If your health falls below 0, you lose. 

Click [here](https://sashapatsel.github.io/super-smash-rpg/) to play.

<img src="assets/images/demo.png">



### Installing

Feel free to clone this repository! No other installation necessary.


## Built With

* HTML 
* CSS
* JQuery


## Code Snippets
Here are some of the variables at play in this game
```javascript
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
	
	};

```

## Authors

* Sasha Patsel [Website](https://sashapatsel.github.io/portfolio-sp/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Notes
- This is my first project using JQuery. I found it to be a very refreshing change from vanilla javascript. JQuery makes it a lot more straightforward to identify elements on the DOM and to manipulate them
