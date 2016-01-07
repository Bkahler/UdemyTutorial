
var askForInput = function(){
	var input = prompt("What would you like to do ?");
	return input
};

var routeInput = function(){
	var input = this.ask();

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
		input = this.ask();
  };
	console.log("Ok quitting...")
};

var addnewItem = function(){
	var newItem = prompt("Please enter your new Item.");
	ToDoApp.todos.push(newItem);
	console.log(newItem + " Has been added to the list.")
};

var deleteItem = function(){
	var itemIndex = prompt("which item would you like to delete?");
  ToDoApp.todos.splice(itemIndex,1);
  console.log("Item has been deleted !")
};

var printList = function(){
   console.log("*************************");
   ToDoApp.todos.forEach(function(todo,index){
   	console.log(index + ": " + todo);
   });
   console.log("*************************");
};


var ToDoApp = {
	todos:[],
	ask: askForInput,
	start: routeInput,
}

ToDoApp.start();