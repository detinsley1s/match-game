var MatchGame = {};

// Sets up a new game after HTML document has loaded.
// Renders a 4x4 board of cards.

// Generates and returns an array of matching card values.
MatchGame.generateCardValues = function () {
	let cardValues = [];
	for(let i = 1; i <= 8; ++i) {
		cardValues.push(i);
		cardValues.push(i);
	}
	let randomCardValues = [];
	while(cardValues.length > 0) {
		let randomIdx = Math.floor(Math.random() * cardValues.length);
		randomCardValues.push(cardValues[randomIdx]);
		cardValues.splice(randomIdx, 1);
	}

	return randomCardValues;
};

// Converts card values to jQuery card objects and adds them to the supplied game
// object.
MatchGame.renderCards = function(cardValues, $game) {

};

// Flips over a given card and checks to see if two cards are flipped over.
// Updates styles on flipped cards depending whether they are a match or not.
MatchGame.flipCard = function($card, $game) {

};