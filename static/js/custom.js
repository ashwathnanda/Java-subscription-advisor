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
		(document.getElementById("out")).innerHTML = "It is adviced that you get the subscription plan as you are using an older version of java and only subscribed members will get critical bug fixes and performance patches. Moreover using components like JRockit, Mission control are liable for subscription.";
	}
	
	else if ((document.getElementById("q01Y")).checked &&
			(document.getElementById("q02Y")).checked &&
			(document.getElementById("q03Y")).checked &&
			(document.getElementById("q04N")).checked &&
			(document.getElementById("q05Y")).checked &&
			(document.getElementById("q06N")).checked &&
			(document.getElementById("q07N")).checked &&
			(document.getElementById("q08N")).checked &&
			(document.getElementById("q09Y")).checked &&
			(document.getElementById("q10N")).checked ) {
				(document.getElementById("out")).innerHTML = "As you are already using services like Azul,Redhat it would be cost effective if you use the JDK provided by them. These companies are planning to provide long term support for their JDK version.";
			}
	
	
	
	else if ((document.getElementById("q01Y")).checked &&
			(document.getElementById("q03N")).checked &&
			(document.getElementById("q08N")).checked )	{
		(document.getElementById("out")).innerHTML = "You don't need the subscriptionas you can keep using OpenJDK and make sure that you are upgrading your JAVA ver every 6 months so that you get patches regularly";
	}
	else {
		(document.getElementById("out")).innerHTML = "Please select all options!!";
	}
}
