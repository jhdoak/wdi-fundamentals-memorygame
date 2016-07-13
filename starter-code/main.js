var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// Defining gameBoard variable and looping to create 4 card divs
var gameBoard = document.getElementById('game-board');

var createBoard = function() {
	for (var i = 0; i < 4; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
};

createBoard();








/*
if (cardTwo === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}
*/