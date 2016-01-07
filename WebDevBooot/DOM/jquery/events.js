$("input[type='text']").keypress(function(event){
  if(event.which ===13){
    alert("You hit Enter");
  }
  console.log(event);
});


$("button").click(function(){
  var text = $(this).text();
  console.log("You clicked the" + text);
});


$("h1").on("click", function(e){
	$(this).css("color","red");
});

$("button").on("mouseenter", function() {
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function() {
	$(this).css("font-weight", "normal");
});
