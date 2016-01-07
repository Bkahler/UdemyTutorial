$("#fadeOutButton").on("click", function(){
	$(".fadeDiv").fadeOut(2000, function(){
		// $(this).remove();
		console.log("faded")
	});
})	

$("#fadeInButton").on("click", function(){
	$(".fadeDiv").fadeIn(2000, function(){
		// $(this).remove();
		console.log("faded In")
	});
})	

$("#fadeToggle").on("click", function(){
	$(".fadeDiv").fadeToggle(2000, function(){
		console.log("Toggled!")
	});
})

$("#slideToggle").on("click",function(){
	$(".fadeDiv").slideToggle(2000, function(){
		console.log("slid!")
	});
})