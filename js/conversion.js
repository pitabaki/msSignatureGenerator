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

//Defined init Function (onload, do this)
function init(){
	//measure taken in reducing sloppy coding
	'use strict';
	//Create Variables (DOM Selectors)
	var name = document.getElementById("name"),
		position = document.getElementById("position"),
		number = document.getElementById("number"),
		number2 = document.getElementById("number2"),
		phoneNumber = document.getElementById("phoneNumber"),
		email = document.getElementById("email"),
		form = document.getElementById("form"),
		numOne = document.getElementById("numOne"),
		numTwo = document.getElementById("numTwo"),
		numSwitch = document.getElementById("numSwitch"),
		rplName = "rplName",
		rplTitle = "rplTitle",
		rplNum1 = "rplNum1",
		rplNum2 = "rplNum2",
		rplEmail = "rplEmail",
		anchor = document.getElementsByTagName("a"),
		emHREF = anchor[1];

	//when amount of numbers is changed
	function numChange(){
		if(numSwitch.selectedIndex === 1){
			numOne.style.display = "none";
			phoneNumber.innerText = "Phone Numbers:";
			number2.style.display = "block";
			numTwo.style.display = "block";
		}else{
			numTwo.style.display = "none";
			number2.style.display = "none";
			phoneNumber.innerText = "Phone Number:";
			numOne.style.display = "block";
		}
	}

	numSwitch.onchange = numChange;

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