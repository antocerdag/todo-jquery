$(document).ready(function(){
	
	$('#list-items').html(localStorage.getItem('listItems'));

	$("#tarea-input" ).keypress(function(e) {
		var key = e.which;
		if (key == 13) {

			var tareaNueva = $(".input-box").val();
			var nuevaTarea = $('.tareas-nuevas').append("<li> <input type='checkbox' class='checkbox' id='test5'/>" + tareaNueva 
				+ "<button class='btn-basurero remove right' type='button'><i class='fa fa-trash-o' aria-hidden='true'></i></button> </li>");
			$(".input-box").val(" ");

		};
		$(".checkbox").click(function(){
				
			$(".tareas-completas").append(nuevaTarea);
			});
		
			$("button").click(function(r){
				$(this).parent().remove();
			})
		
	});


})