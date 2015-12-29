// Check off items when clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// New Item input
$("input[type='text'").keypress(function(){
	if(event.which === 13){
		var userInput = $(this).val();
		$(this).val("");
		if(userInput != ""){
		  $("ul").append('<li> <span> <i class="fa fa-minus-circle"></i></span> ' + userInput + '</li>');
		};
	};
});

// Fade input in and out 
$(".fa-plus-circle").click(function(){
	$("input[type='text'").fadeToggle();
})