/*

Email Signature Generator

Developed by: Peter Berki
Developed for: Meyer Sound

*/

//replace text function
function textSwap(id,message){
	//measure taken in reducing sloppy coding
	'use strict';
	var output = document.getElementById(id);
	if(output.textContent !== 'undefined'){
		output.textContent = message;
	}else{
		output.innerText = message;
	}
}

//replace text function
function inputHTML(id,property){
	//measure taken in reducing sloppy coding
	'use strict';
	var output = document.getElementById(id);
	output.innerHTML = property;
}

function fadedBG(id,hue,cloak){
	//measure taken in reducing sloppy coding
	'use strict';
	var bgDiv = document.getElementById(id);
	bgDiv.style.display = cloak;
	bgDiv.style.backgroundColor = hue;

}

//Defined init Function (onload, do this)
function init(){
	//measure taken in reducing sloppy coding
	'use strict';

	//Create Variables (DOM Selectors)
	var name = document.getElementById("name"),
		position = document.getElementById("position"),
		number = document.getElementById("number"),
		number2 = document.getElementById("number2"),
		email = document.getElementById("email"),
		form = document.getElementById("form"),
		formPos = document.getElementById("padTop"),
		close = document.getElementById("close-button"),
		coloring = "rgba(0,0,0,0.5)",
		htmlBR = "<br />",
		breakInsert = document.getElementById("break"),
		rplName = "rplName",
		rplTitle = "rplTitle",
		rplNum1 = "rplNum1",
		rplNum2 = "rplNum2",
		rplEmail = "rplEmail",
		anchor = document.getElementsByTagName("a"),
		emHREF = anchor[2];

	//on submit
	function fluxCapacitate(){
		name = name.value;
		position = position.value;
		number = "T: " + number.value;
		number2 = "T: " + number2.value;
		email = email.value;
		emHREF.href = "mailto:" + email;
		formPos.style.left = 0;
		fadedBG("blackBG", coloring, "block");
		if((name.length > 0) && (position.length >0) && (number.length > 0) && (number2.length > 3) && (email.length > 0)){
			textSwap(rplName,name);
			textSwap(rplTitle,position);
			textSwap(rplNum1,number);
			textSwap(rplNum2,number2);
			textSwap(rplEmail,email);
			breakInsert.innerHTML = htmlBR;
			init();
		}else if((name.length > 0) && (position.length >0) && (number.length > 0) && (number2.length === 3) && (email.length > 0)){
			textSwap(rplName,name);
			textSwap(rplTitle,position);
			textSwap(rplNum1,number);
			textSwap(rplEmail,email);
			document.getElementById(rplNum2).style.display = "none";
			init();
		}else{
			alert("Bad Entry: one of your inputs was incorrect.");
		}
		return false;
	}
	//close results
	function deAtomize(){
		if(formPos.style.left === "0px"){
			formPos.style.left = "-600px";
			fadedBG("blackBG",coloring,"none");
		}else{
			alert("FAIL!!!");
		}
	}

	close.onclick = deAtomize;
	form.onsubmit = fluxCapacitate;
}
window.onload = init;