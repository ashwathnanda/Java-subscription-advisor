$(document).ready(function(){
 $('.ui.radio.checkbox')
  .checkbox();

});


function checkForm() {	
	// Rule formation
	if (((document.getElementById("q01-8")).checked || 
		(document.getElementById("q01-9")).checked ||	
		(document.getElementById("q01-10")).checked ) &&
		(document.getElementById("q02Y")).checked && 
		(document.getElementById("q03N")).checked && 
		(document.getElementById("q04Y")).checked && 
		(document.getElementById("q05Y")).checked &&
		(document.getElementById("q06Y")).checked && 
		(document.getElementById("q07Y")).checked &&
		(document.getElementById("q08N")).checked &&
		(document.getElementById("q09Y")).checked &&
		(document.getElementById("q10Y")).checked) {
		(document.getElementById("out")).innerHTML = "Get the subscription";
	}
	else if ((document.getElementById("q01Y")).checked &&
			(document.getElementById("q03N")).checked &&
			(document.getElementById("q08N")).checked )	{
		(document.getElementById("out")).innerHTML = "You don't need the subscription";
	}
	else {
		(document.getElementById("out")).innerHTML = "Please select all options!!";
	}
}
