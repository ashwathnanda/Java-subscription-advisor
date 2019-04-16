$(document).ready(function(){
 $('.ui.radio.checkbox')
  .checkbox();

});


function checkForm() {	
	if ((document.getElementById("q10Y")).checked && (document.getElementById("q09Y")).checked) {
		(document.getElementById("out")).innerHTML = "Value is Y";
	}
	else {
		(document.getElementById("out")).innerHTML = "Value is N";
	}
	
}
