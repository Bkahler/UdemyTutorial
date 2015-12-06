var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var title = document.querySelector("#title");
var resetButton = document.querySelector("#reset");
var hardButton = document.querySelector("#hardButton");
var easyButton = document.querySelector("#easyButton");

function setUpButtons(){
	easyButton.addEventListener("click", function(){
		easyButton.classList.add("selected");
		hardButton.classList.remove("selected");
		resetButton.textContent = "New Colors";
		title.style.background = "steelblue";
		messageDisplay.textContent = "";
		numOfSquares = 3;
		colors = generateRandomColors(numOfSquares);
		pickedColor = pickColor();
		changeDisplayColorMessage();
		
		for(var i = 0 ; i < squares.length; i++){
			if (colors[i]){
				squares[i].style.background = colors[i];
			}
			else{
				squares[i].style.display = "none";
			};
		};

	});

	hardButton.addEventListener("click", function(){
		hardButton.classList.add("selected");
		easyButton.classList.remove("selected");
		resetButton.textContent = "New Colors";
		title.style.background = "steelblue";
		messageDisplay.textContent = "";
		numOfSquares = 6;
		colors = generateRandomColors(numOfSquares);
		pickedColor = pickColor();
		changeDisplayColorMessage();

		for(var i = 0 ; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		};
		
	});

	resetButton.addEventListener("click",function(){
		colors = generateRandomColors(numOfSquares);
		pickedColor = pickColor();
		title.style.background = "steelblue";
		setUpBoard();
	});
}


function setUpBoard(){
	changeDisplayColorMessage()
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
		// adding initial color to squares
		squares[i].style.background = colors[i];
		// adding click events to each square
		addClickEvents(i);
	};
};

function addClickEvents(i){
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		// comparing clicked color with picked color
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "play again";
			changeColors(clickedColor);
		} 
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again!";
		};
	});
};

function changeDisplayColorMessage(){
	colorDisplay.textContent = pickedColor;
};


function pickColor(){
	var randomColor = Math.floor(Math.random() * colors.length)
	return colors[randomColor];
};

function changeColors(color){
	title.style.background = color;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	};
};

function generateRandomColors(num){
	var colorArray = [];
	for(var i = 0; i < num; i++){
		colorArray.push(randomColor());
	}
	return colorArray;
};

function randomColor(){
	var red = Math.floor(Math.random()*256)
	var green = Math.floor(Math.random()*256)
	var blue = Math.floor(Math.random()*256)
	return "rgb(" + red + ", " + green + ", " + blue + ")"
};

setUpButtons();
setUpBoard();