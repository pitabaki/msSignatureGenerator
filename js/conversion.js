/*

Email Signature Generator

Developed by: Peter Berki
Developed for: Meyer Sound

*/

//replace text function
function textSwap(id,message){
	var output = document.getElementById(id);
	if(output.textContent !== 'undefined'){
		output.textContent = message;
	}else{
		output.innerText = message;
	}
}

//Defined init Function (onload, do this)
function init(){
	'use strict';
	//Create Variables
	var name = document.getElementById("name"),
		position = document.getElementById("position"),
		number = document.getElementById("number"),
		email = document.getElementById("email"),
		form = document.getElementById("form"),
		rplName = "rplName",
		rplTitle = "rplTitle",
		rplNum1 = "rplNum1",
		rplNum2 = "rplNum2",
		rplEmail = "rplEmail",
		anchor = document.getElementsByTagName('a'),
		emHREF = anchor[1];

	//on submit
	function fluxCapacitate(){
		name = name.value;
		position = position.value;
		number = "T: " + number.value;
		email = email.value;
		emHREF.href = "mailto:" + email;
		if((name !== "") && (position !== "") && (number !== "") && (email !== "")){
			textSwap(rplName,name);
			textSwap(rplTitle,position);
			textSwap(rplNum1,number);
			textSwap(rplEmail,email);
		}else{
			alert("Bad Entry: one of your inputs was incorrect.");
		}
		return false;
	}
	form.onsubmit = fluxCapacitate;
}
window.onload = init;