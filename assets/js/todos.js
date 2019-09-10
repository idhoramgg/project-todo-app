
(function(){

	var list = document.querySelector('#data');
// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
		localStorage.removeItem('myitems');
	});
	
	event.stopPropagation();
});

$("#text").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		list.innerHTML += "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>";
		store();
		$(this).val("");
		
	}
});

$("#toggle-form").click(function(){
	$("#text").fadeToggle();
});

function store() {
	var list = document.querySelector('#data')
	window.localStorage.myitems = list.innerHTML;
}
function getValues(){
	var storedValues = window.localStorage.myitems;
	if(!storedValues) {
	} else {
		list.innerHTML = storedValues;
	}
}
function remove() {
	localStorage.removeItem('myitems');
}


getValues();
})();

let day = document.querySelector('#time')
const options = {weekday : "long", month:"short", day:"numeric", year:"numeric"};
const today = new Date();

day.innerHTML = today.toLocaleDateString("en-US", options);
