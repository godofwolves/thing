// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	document.getElementById("pat").classList.add("opaque");
	document.getElementById("ram").classList.add("opaque");
	document.getElementById("tro").classList.add("opaque")
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("pats-column").classList.remove("pats-silver");
	document.getElementById("rams-column").classList.remove("rams-blue");
	document.getElementById("center").classList.remove("hide");
}

function showTrophy(el){
	document.getElementById("ram").src = "images/lombardi_trophy.jpg";
	document.getElementById("pat").src = "images/lombardi_trophy.jpg";
	document.getElementById("tro").src = "images/lombardi_trophy.jpg";
}