this.registrado=false;

$("#Entrar").click(function(){
	if ($("#Usuario").val() =="user" && $("#Contraseña").val() == "admin" ){

		registrado=true;

		if (registrado == true) {
			window.location="inicio.html";
		}	
	}else{
		swal.fire("error");

	}
});



