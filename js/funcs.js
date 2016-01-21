/*

Email Signature Generator

Developed by: Peter Berki
Developed for: Meyer Sound

*/


/**************************************

function key: returns id

**************************************/

function key(id){
	'use strict';
	if(typeof id === "string"){
		return document.getElementById(id);
	}
}

/**************************************

function textSwap: replaces and/or modifies text

**************************************/

function textSwap(id,message){
	//measure taken in reducing sloppy coding
	'use strict';
	var output = id;
	if(output.textContent !== 'undefined'){
		output.textContent = message;
	}else{
		output.innerText = message;
	}
}

/**************************************

function phoneQC: checks that telephone numbers being input follow branding guidelines

**************************************/

function phoneQC(message){
  var emptyCont = [],
      transCont = [],
      secEmpty = [];
  for(var i = 0;i < message.length;i++){
    if((message[i] === "-") || (message[i] === ".")){
      emptyCont.push(" ");
      transCont.push(" ");
    }else if((message[i] === "(") || (message[i] === ")")){
      emptyCont.push();
      transCont.push();
    }else{
      emptyCont.push(message[i]);
      transCont.push(message[i]);
    }
  }
  transCont = transCont.reverse();
  for(var g = 0; g < transCont.length; g++){
    if((secEmpty.length === 4) && (emptyCont[emptyCont.length - 5] !== " ")){
      secEmpty.push(" ");
      secEmpty.push(transCont[g]);
    }else{
      secEmpty.push(transCont[g]);
    }
  }
  secEmpty.reverse();
  secEmpty[secEmpty.length - 5] = ".";
  secEmpty = secEmpty.join("");
  return secEmpty;
}

/**************************************

function replHTML: replaces and/or modifies HTML

**************************************/

function replHTML(id,property){
	'use strict';
	var output = id;
	if(typeof property !== 'undefined'){
		output.innerHTML = property;
	}else{
		console.log("Fail!!! Function replHTML failed to pass 'property' properly. Double-check your variables.");
	}
}

/**************************************

function fadedBG: modifies both display and background-color

**************************************/

function fadedBG(id,hue,cloak,time){
	'use strict';
	var bgDiv = id;
	if(typeof cloak === "string"){
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
	}else{
		console.log("Error: the variable 'cloak' was incorrectly passed through function 'fadedBG'. Double-check your variables.")
	}
}

/**************************************

function vidIllum: modifies the opacity of a passed node/element

**************************************/

function vidIllum(name,opac){
	'use strict';
	var innerDiv = name;
	if(typeof innerDiv.style.opacity !== "undefined"){
		innerDiv.style.opacity = opac;
	}else{
		console.log("Error: one of the variables was incorrectly passed through function 'vidIllum'. Double-check your variables.")
	}
}

/**************************************

function whatUp: modifies the margin-top position

**************************************/

function whatUp(id,position,time){
	'use strict';
	var bgDiv = id;
	if(typeof position === "string"){
		if(typeof time === 'undefined'){
			setTimeout(function(){
				bgDiv.style.marginTop = position;
			},50);
		}else{
			setTimeout(function(){
				bgDiv.style.marginTop = position;
			},time);
		}
	}else{
		console.log("Error: the variable 'position' was incorrectly passed through function 'whatUp'. Double-check your variables.")
	}
}

/**************************************

function extSwap: adds a phone number's extension (not the phone number, though)

**************************************/

function extSwap(id,message){
	"use strict";
	console.log("Passing " + id + " and " + message);
	if(message.length !== 0){
		message = " x" + message;
		textSwap(id,message);
	}else{
		message = " ";
		textSwap(id,message);
	}
}

/**************************************

function dropD: modifies video src

**************************************/

function dropD(id,link){
	"use strict";
	var hvyMtl = id;
	if(typeof link === "string"){
		hvyMtl.src = link;
	}else{
		console.log("Link passed to dropD was not a string.");
	}
}