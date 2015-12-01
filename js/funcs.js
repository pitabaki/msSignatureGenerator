/*

Email Signature Generator

Developed by: Peter Berki
Developed for: Meyer Sound

*/


//return document id

function key(id){
	'use strict';
	if(typeof id === "string"){
		return document.getElementById(id);
	}
}

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
function replHTML(id,property){
	//measure taken in reducing sloppy coding
	'use strict';

	if((id.id === "undefined") && (typeof property === "string")){
		console.log("replHTML if");
		var output = document.getElementById(id);
		output.innerHTML = property;
	}else if((id.id !== "undefined") && (typeof property === "string")){
		console.log("replHTML else if");
		id.innerHTML = property;
	}else{
		console.log("Fail!!! Function replHTML failed to pass variables presented to it.");
	}
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

function vidIllum(id,name,opac,cloak,time){
	'use strict';
	var bgDiv = document.getElementById(id);
	var innerDiv = document.getElementById(name);
	bgDiv.style.display = cloak;
	setTimeout(function(){
		innerDiv.style.opacity = opac;
	},50);
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

function dropD(id,link){
	"use strict";
	if((typeof id === "string") && (typeof link === "string")){
		var hvyMtl = document.getElementById(id);
		hvyMtl.src = link;
	}else{
		console.log("Link passed to dropD was not a string.");
	}
}