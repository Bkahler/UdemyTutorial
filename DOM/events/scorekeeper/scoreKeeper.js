var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById('reset');
var p1ScoreSpan = document.getElementById('p1Score');
var p2ScoreSpan = document.getElementById('p2Score');
var numInput = document.querySelector('input');
var winningScoreDisplay = document.querySelector('#winningScore');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

function updateScore(){
  p1ScoreSpan.textContent = p1Score;
  p2ScoreSpan.textContent = p2Score;
};

function checkGame(){
	if(p1Score === winningScore || p2Score === winningScore){
		if (p1Score === winningScore){
			p1ScoreSpan.classList.add("winner");
		} 
		else{
			p2ScoreSpan.classList.add("winner");
		}
		gameOver = true;
	};
}

function updateWinningScore(){
 winningScoreDisplay.textContent = this.value;
 winningScore = Number(this.value);
 resetGame();
};

function resetGame(){
	p1Score = 0;
	p2Score = 0;
	updateScore();
	gameOver = false;
	p1ScoreSpan.classList.remove("winner");
	p2ScoreSpan.classList.remove("winner");
}

p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		updateScore();
		checkGame();
	};
});

p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		updateScore();
		checkGame();
	};
});

resetButton.addEventListener("click", function(){
	resetGame();
});

numInput.addEventListener("change", function(){
	updateWinningScore();
});



