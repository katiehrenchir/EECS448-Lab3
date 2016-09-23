

var catNum=0;

function slideshowNext(){

	catNum++;
	catNumCheck();
	displayCat();

}

function slideshowPrev(){

	catNum--;
	catNumCheck();
	displayCat();

}

function displayCat(){

	document.getElementById("img").src = "img/cat" + catNum +".jpg"; 

}

function catNumCheck(){
	if(catNum > 5){
		catNum=1;

	}
	if(catNum < 1){
		catNum=5;
	}
	

}
