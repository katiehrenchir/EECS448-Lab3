

function passwordValidation(p1, p2)
{
	 var pass1 = document.getElementById('p1').value;
     var pass2 = document.getElementById('p2').value;

    if(pass2 != pass1) {
		alert("Passwords do not match!");
	} 

	if((pass1 != pass2) && (pass1.length <8) ) {

		alert("Passwords do not match, and at least one is not 8 characters");
	}

	if((pass1 == pass2) && (pass1.length < 8) ){
		alert("Passwords match, but must be at least 8 characters");
	} else if (pass1 == pass2){
		alert("Passwords validated!");
	}
}
