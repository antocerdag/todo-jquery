$(document).ready(function(){
	
	$( "#tarea-input" ).keypress(function() {
		var tareaNueva = $(".input-box").val();
		$(".tareas-nuevas").append(tareaNueva);
  		

	});
})