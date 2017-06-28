$(document).ready(function(){
	
	$("#tarea-input" ).keypress(function(e) {
		var key = e.which;
		if (key == 13) {
			var tareaNueva = $(".input-box").val();
			var nuevaTarea = $(".tareas-nuevas").append("<p> <input type='checkbox' class='test5 checkbox'/><label>" + tareaNueva + "</label> <a href='#' class='btn-basurero' type='button'><i class='fa fa-trash-o' aria-hidden='true'></i></a> </p>");
			$(".checkbox").click(function(m){
				$(nuevaTarea).append(".tareas-completas");
			});
		}
	});
})