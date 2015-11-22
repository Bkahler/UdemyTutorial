
var askForInput = function(){
	var input = prompt("What would you like to do ?");
	return input
};

var checkInput = function(input){
	while(input != "quit"){
		if(input ==="list"){
			printList();
		}
		else if(input ==="new"){
			addnewItem();
		}
		else if(input==="delete"){
			deleteItem();
		};
		input = askForInput();
  };
	console.log("Ok quitting...")
};

var addnewItem = function(){
	var newItem = prompt("Please enter your new Item.");
	todos.push(newItem);
	console.log(newItem + " Has been added to the list.")
};

var deleteItem = function(){
	var itemIndex = prompt("which item would you like to delete?");
  todos.splice(itemIndex,1);
  console.log("Item has been deleted !")
};

var printList = function(){
   console.log("*************************");
   todos.forEach(function(todo,index){
   	console.log(index + ": " + todo);
   });
   console.log("*************************");
};



var todos = [];
var input = askForInput();
checkInput(input);   