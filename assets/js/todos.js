//set vals
var todoText;





//check off specific todos by clicking

$('ul').on("click", "li", function(e){
	$(this).toggleClass("completed")
});


//listen for clicks on the x to delete todos
$('ul').on("click", "span", function(e){

	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	})
	e.stopPropagation();
});


//create some new todos
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//capture the input in a variable
		todoText = $(this).val()
		//clear input
		$(this).val("")
		//append the text to a new todo
		$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+todoText+"</li>")

	}
});

$('.fa-plus').on("click", function(e){
	$("input[type='text']").fadeToggle()
})