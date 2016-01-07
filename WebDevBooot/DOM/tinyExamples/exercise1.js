var item = document.getElementsByTagName('p');
var item = document.getElementById('first');
var item = document.getElementsByClassName('special')[0];
var item = document.querySelector(".special");
var item = document.querySelectorAll(".special")[0];
var item = document.querySelector("#first");

item.style.color = "blue";
item.classList.add("someClass");
item.classList.toggle("someClass");

item.textContent = "New Stuff!!"
item.innerHTML= "New <strong>Stuff</strong>!!"


document.querySelector("#first").innerHTML = "new <strong> stuff</strong>!!"
document.querySelector("a").setAttribute("href","http://yahoo.com")


var lis = document.selectElementsbyTagName("li");

for(var i =0; i < lis.length; i++){
	lis[i].style.background = "red";
}

