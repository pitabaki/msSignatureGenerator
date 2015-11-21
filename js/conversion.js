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

function fadedBG(id,hue,cloak,time){
	//measure taken in reducing sloppy coding
	'use strict';
	var bgDiv = document.getElementById(id);
	if(typeof time === 'undefined'){
		bgDiv.style.display = cloak;
		setTimeout(function(){
			bgDiv.style.backgroundColor = hue;
		},50);
	}else{
		bgDiv.style.backgroundColor = hue;
		setTimeout(function(){
			bgDiv.style.display = cloak;
		},time);
	}
}

function whatUp(id,position,time){
	//measure taken in reducing sloppy coding
	'use strict';
	var bgDiv = document.getElementById(id);
	setTimeout(function(){
		bgDiv.style.marginTop = position;
	},time);
	

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
		number3 = document.getElementById("number3"),
		email = document.getElementById("email"),
		form = document.getElementById("form"),
		formPos = document.getElementById("padTop"),
		close = document.getElementById("close-button"),
		blackBG = document.getElementById("blackBG"),
		coloring = "rgba(0,0,0,0.75)",
		erasing = "rgba(0,0,0,0)",
		htmlBR = "<br />",
		breakInsert = document.getElementById("break"),
		breakInsert2 = document.getElementById("break2"),
		rplName = "rplName",
		rplTitle = "rplTitle",
		rplNum1 = "rplNum1",
		rplNum2 = "rplNum2",
		rplNum3 = "rplNum3",
		rplEmail = "rplEmail",
		anchor = document.getElementsByTagName("a"),
		emHREF = anchor[0]; //References signature's # email address
		//Will replace # with whatever user enters
	//on submit
	function fluxCapacitate(){
		name = name.value;
		position = position.value;
		number = "T: " + number.value;
		number2 = "T: " + number2.value;
		number3 = "T: " + number3.value;
		email = email.value;
		email = email.toLowerCase();
		console.log(email);
		emHREF.href = "mailto:" + email;
		formPos.style.left = 0;
		fadedBG("blackBG", coloring, "block");
		whatUp("copyPaste","0", 250);
		if((name.length > 0) && (position.length >0) && (number.length > 0) && (number2.length > 3) && (number3.length > 3) && (email.length > 0)){
			textSwap(rplName,name);
			textSwap(rplTitle,position);
			textSwap(rplNum1,number);
			textSwap(rplNum2,number2);
			textSwap(rplNum3,number3);
			textSwap(rplEmail,email);
			breakInsert.innerHTML = htmlBR;
			breakInsert2.innerHTML = htmlBR;
			init();
		}else if((name.length > 0) && (position.length >0) && (number.length > 0) && (number2.length > 3) && (email.length > 0)){
			textSwap(rplName,name);
			textSwap(rplTitle,position);
			textSwap(rplNum1,number);
			textSwap(rplNum2,number2);
			textSwap(rplEmail,email);
			breakInsert.innerHTML = htmlBR;
			document.getElementById(rplNum3).style.display = "none";
			init();
		}else if((name.length > 0) && (position.length >0) && (number.length > 0) && (number2.length === 3) && (email.length > 0)){
			textSwap(rplName,name);
			textSwap(rplTitle,position);
			textSwap(rplNum1,number);
			textSwap(rplEmail,email);
			document.getElementById(rplNum2).style.display = "none";
			document.getElementById(rplNum3).style.display = "none";
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
			fadedBG("blackBG",erasing,"none",500);
			whatUp("copyPaste","-150px", 250);
		}else{
			alert("FAIL!!!");//Just reassurance I haven't completely screwed up
		}
	}
	/*function sigCopy(){

	}*/
	close.onclick = deAtomize;
	blackBG.onclick = deAtomize;
	form.onsubmit = fluxCapacitate;
}
window.onload = init;