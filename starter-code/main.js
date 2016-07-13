////////// VARIABLES //////////

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');
var score = document.getElementById('score');
score.innerHTML = 0



////////// FUNCTIONS //////////

// Create cards according to length of 'cards' array
var createBoard = function() {
	for (var i = 0; i < cards.length; i+=1) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
	}
};

// Check if the two cards in play are matching
var isMatch = function(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
		score.innerHTML ++;
	} else {
		alert('Nope, try again!');
	}
};

// Check if two cards are in play
var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="img/king1.png" alt="king" />';
	} else {
		this.innerHTML = '<img src="img/queen1.png" alt="queen" />';
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

/*  How do I get the board to clear after two cards are picked?
var clearBoard = function() {
	var cards = document.getElementsByClassName('.card');
	for (i=0; i < cards.length; i += 1) {
		cards[i].innterHTML = '';
	}
};
*/

createBoard();