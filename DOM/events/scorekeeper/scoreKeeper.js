var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById('reset');
var numInput = document.querySelector('#number');
var playerNumInput = document.querySelector('#players');
var winningScoreDisplay = document.querySelector('#winningScore');
var playersDiv = document.querySelector('#playersDiv');
var body = document.querySelector('body');
var scoresDiv = document.querySelector('#scores');


var gameOver = false;
var winningScore = 5;
var scores = {};

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

function buttonEvent(e) {
  var target = getEventTarget(e);
  if(target.tagName.toLowerCase() === 'button') {
  	var targetId = target.id
		if(!gameOver){
			scores[targetId]++;
			updateScore();
			checkGame();    
  	};
  };
};

function updateScore(){
	keys = Object.keys(scores);

	if (keys.length >0) {
		for (var i =  0 ; i < keys.length; i++) {
			var cssId = "#scorep" + (i+1);
			var playerScore = document.querySelector(cssId)
			if (playerScore){
				playerScore.textContent = "Player " + (i+1) + " : " + scores[keys[i]];
			}
		};
	};

};

function checkGame(){
	for(var prop in scores) {
    if(scores.hasOwnProperty(prop)) {
        if(scores[prop] === winningScore) {
        	console.log(prop)
            declareWinner(prop);
            gameOver = true;
        }
    }
	}
};

function declareWinner(item){
	var cssId ="#score" + item 
	var winner = document.querySelector(cssId)
	if (winner){
		 winner.classList.add("winner");
	} ;
};

function updateWinningScore(){
 winningScoreDisplay.textContent = numInput.value;
 winningScore = Number(numInput.value);
 resetGame();
};

function resetGame(){
	gameOver = false;
  scoresDiv.innerHTML = ""
  playersDiv.innerHTML = ""
};

function addPlayers(){
	var numPlayers = Number(playerNumInput.value);
	scores = {}
	for ( var i = 1; i < (numPlayers+1); i++ ) {
		cssId = "p" + i 
		scores[cssId] = 0;
		addPlayerButton(i, cssId);
		addPlayerScores(i, cssId);
	};
};

function addPlayerButton(i, cssId){
	playersDiv.innerHTML = playersDiv.innerHTML + '<button id=' + cssId + '>Player ' + i + '</button>';
};

function addPlayerScores(i, cssId){
	scoresDiv.innerHTML = scoresDiv.innerHTML + '<p id=scorep' + i + '> Player ' + i + ' : ' + scores[cssId] + '</p>'
};

resetButton.addEventListener("click", function(){
	resetGame();
});

numInput.addEventListener("change", function(){
	updateWinningScore();
});

playerNumInput.addEventListener("change", function(){
	resetGame();
	addPlayers();
});

body.addEventListener('click', function(event){
	buttonEvent(event)
})
