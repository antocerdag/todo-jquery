$(document).ready(function(){
	
	$('#list-items').html(localStorage.getItem('listItems'));

	$("#tarea-input" ).keypress(function(e) {
		var key = e.which;
		if (key == 13) {

			var tareaNueva = $(".input-box").val();
			var nuevaTarea = $(".tareas-nuevas").append("<p> <input type='checkbox' id='test5 checkbox'/><label>" + tareaNueva + "</label> <a href='' class='btn-basurero' type='button'><i class='fa fa-trash-o' aria-hidden='true'></i></a> </p>");
			$(".input-box").val(" ");

			$(".checkbox").click(function(m){
				var tareaNueva = $(".input-box").val();
			$(m).append(nuevaTarea);
			});

			$(".btn-basurero").click(function(r){
				$(r).remove();
			})
		}
	});


})