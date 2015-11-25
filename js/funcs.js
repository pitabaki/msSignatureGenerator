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

function extSwap(id,message){
	"use strict";
	console.log("Passing " + id + " and " + message);
	if(message.length !== 0){
		console.log("If with " + message);
		message = " x" + message;
		textSwap(id,message);
	}else{
		console.log("Else with " + message);
		message = " ";
		textSwap(id,message);
	}
}