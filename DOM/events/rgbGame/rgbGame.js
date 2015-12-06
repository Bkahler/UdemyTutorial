var numOfSquares = 6;
var colors = "";
var squares = document.querySelectorAll(".square");
var pickedColor = "";
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var title = document.querySelector("#title");
var resetButton = document.querySelector("#reset");
var hardButton = document.querySelector("#hardButton");
var easyButton = document.querySelector("#easyButton");
var modebuttons = document.querySelectorAll(".modebutton")

function setUpBoard(){
	changeDisplayColorMessage()
	resetButton.textContent = "New Colors";
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	title.style.background = "steelblue";

	messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		addClickEvents(i);
	};
};

function modeBtns(){
	for(var i = 0; i < modebuttons.length; i++){
		modebuttons[i].addEventListener("click", function() {
			modebuttons[0].classList.remove("selected");
			modebuttons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
			setUpBoard();
		});

	};
};

function resetBtn(){
	resetButton.addEventListener("click",function(){
		setUpBoard();
	});
};

function addClickEvents(i){
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
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

resetBtn();
modeBtns();
setUpBoard();