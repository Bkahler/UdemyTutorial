var title = document.querySelector("h1");
var lis = document.querySelectorAll("li");
function changeColor(){
	this.style.color = "red";
}

title.addEventListener("click", function(){
	alert("Title was clicked")
});

for (var i =0; i< lis.length; i++) {
	lis[i].addEventListener("click", changeColor)
};

