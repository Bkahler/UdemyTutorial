var game = {};

game.numOfSquares = 6;
game.colors = "";
game.pickedColor = "";
game.squares = document.querySelectorAll(".square");
game.colorDisplay = document.querySelector("#colorDisplay");
game.messageDisplay = document.querySelector("#message");
game.title = document.querySelector("#title");
game.resetButton = document.querySelector("#reset");
game.hardButton = document.querySelector("#hardButton");
game.easyButton = document.querySelector("#easyButton");
game.modebuttons = document.querySelectorAll(".modebutton")

game.init = function(){
	game.resetBtn();
	game.modeBtns();
	game.setUpBoard();
};

game.setUpBoard = function(){
	game.changeDisplayColorMessage()
	game.resetButton.textContent = "New Colors";
	game.colors = game.generateRandomColors(game.numOfSquares);
	game.pickedColor = game.pickColor();
	game.title.style.background = "steelblue";

	game.messageDisplay.textContent = "";
  for (var i = 0; i < game.squares.length; i++) {
		if(game.colors[i]){
			game.squares[i].style.display = "block";
			game.squares[i].style.background = game.colors[i];
		}
		else{
			game.squares[i].style.display = "none";
		}
		game.addClickEvents(i);
	};
};

game.modeBtns = function(){
	for(var i = 0; i < game.modebuttons.length; i++){
		game.modebuttons[i].addEventListener("click", function() {
			game.modebuttons[0].classList.remove("selected");
			game.modebuttons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? game.numOfSquares = 3 : game.numOfSquares = 6;
			game.setUpBoard();
		});

	};
};

game.resetBtn = function(){
	game.resetButton.addEventListener("click",function(){
		game.setUpBoard();
	});
};

game.addClickEvents= function(i){
	game.squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if (clickedColor === game.pickedColor){
			game.messageDisplay.textContent = "Correct!";
			game.resetButton.textContent = "play again";
			game.changeColors(clickedColor);
		} 
		else{
			this.style.background = "#232323";
			game.messageDisplay.textContent = "Try again!";
		};
	});
};

game.changeDisplayColorMessage= function(){
	game.colorDisplay.textContent = game.pickedColor;
};

game.pickColor= function(){
	var randomColor = Math.floor(Math.random() * game.colors.length)
	return game.colors[randomColor];
};

game.changeColors= function(color){
	game.title.style.background = color;
	for(var i = 0; i < game.squares.length; i++){
		game.squares[i].style.background = color;
	};
};

game.generateRandomColors= function(num){
	var colorArray = [];
	for(var i = 0; i < num; i++){
		colorArray.push(game.randomColor());
	}
	return colorArray;
};

game.randomColor= function(){
	var red = Math.floor(Math.random()*256)
	var green = Math.floor(Math.random()*256)
	var blue = Math.floor(Math.random()*256)
	return "rgb(" + red + ", " + green + ", " + blue + ")"
};