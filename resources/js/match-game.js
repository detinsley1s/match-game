var MatchGame = {};

// Sets up a new game after HTML document has loaded.
$(function() {
	MatchGame.renderCards(MatchGame.generateCardValues(), $("#game"));
});

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
	$game.data('flippedCards', []);
	let colors = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(160, 85%, 65%)', 'hsl(220, 85%, 65%)', 'hsl(265, 85%, 65%)', 'hsl(310, 85%, 65%)', 'hsl(360, 85%, 65%)'];
	$game.empty();
	cardValues.forEach(function(cardValue) {
		let $card = $('<div class="card col-xs-3"></div>');
		$card.data('value', cardValue);
		$card.data('isFlipped', false);
		$card.data('color', colors[cardValue - 1]);
		$game.append($card);
	});
};

// Flips over a given card and checks to see if two cards are flipped over.
// Updates styles on flipped cards depending whether they are a match or not.
MatchGame.flipCard = function($card, $game) {
	if(!$card.data("isFlipped")) {
		$card.css('background-color', $card.data('color'));
		$card.text($card.data('value'));
		$card.data('isFlipped', true);
		$game.data('flippedCards').push($card);
		if($game.data('flippedCards').length === 2) {

		}
	}
};