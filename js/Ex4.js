
function update(){

	 var borderRed = document.getElementById('r').value;
     var borderGreen = document.getElementById('g').value;
     var borderBlue = document.getElementById('b').value;
     var borderWidth = document.getElementById('w').value;

	 var backgroundRed = document.getElementById('r2').value;
     var backgroundGreen = document.getElementById('g2').value;
     var backgroundBlue = document.getElementById('b2').value;

	var p = document.getElementById("paragraph");

	var borderCol = borderRed + borderGreen + borderBlue;
	p.style.borderColor = "#" + borderCol;

	p.style.borderWidth = borderWidth + "px";

	var backgroundCol = backgroundRed + backgroundGreen + backgroundBlue;
	p.style.backgroundColor = "#" + backgroundCol;



}


