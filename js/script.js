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
		console.log("If with " + message);
		message = " x" + message;
		textSwap(id,message);
	}else{
		console.log("Else with " + message);
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
//Check active browser

var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
var fireOverlay = key("firefox-overlay"),
	error = key("error"),
	fireBG = key("fireBG");
/*
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
var isChrome = !!window.chrome && !isOpera;
var isIE = false || !!document.documentMode;*/

if(isFirefox === true){
	fireOverlay.style.display = "block";
	setTimeout(function(){
		fireBG.style.opacity = "0.75";
	}, 100);
	setTimeout(function(){
		error.style.top = "-100px";
	}, 500);
}
/*

Email Signature Generator

Developed by: Peter Berki
Developed for: Meyer Sound

*/

function emailClients(name,link,value,markup){
	this.name = name;
	this.link = link;
	this.value = value;
	this.markup = markup;
}

//Defined init Function (onload, do this)
function init(){
	//measure taken in reducing sloppy coding
	'use strict';
	
	//email clients(variables)
	var out10Link = "https://www.meyersound.com/email/email_signature/distribution/video/signature_rough_v4.mp4",
		out13Link = "https://www.meyersound.com/email/email_signature/distribution/video/signature_rough_v4.mp4",
		out11Link = "https://www.meyersound.com/email/email_signature/distribution/video/Mac_Outlook11.mp4",
		macMailLink = "https://www.meyersound.com/email/email_signature/distribution/video/Mac_Mail.mp4";

	//email clients (objects)
	var outlook10 = new emailClients("PC Outlook 2010", out10Link, "outlook10"),
		outlook13 = new emailClients("PC Outlook 2013", out13Link, "outlook13"),
		outlook11 = new emailClients("Mac Outlook 2011", out11Link, "outlook11"),
		macMail = new emailClients("Mac Mail", macMailLink, "MacMail");

	//Create Variables (DOM Selectors)
	var name = key("name"),
		position = key("position"),
		number = key("number"),
		number2 = key("number2"),
		number3 = key("number3"),
		ext1 = key("ext1"),
		ext2 = key("ext2"),
		email = key("email"), 
		form = key("form"),
		formPos = key("padTop"),
		close = key("close-button"),
		blackBG = key("blackBG"),
		coloring = "rgba(0,0,0,0.75)",
		erasing = "rgba(0, 0, 0, 0)",
		htmlBR = "<br />",
		breakInsert = key("break"),
		breakInsert2 = key("break2"),
		breakInsert3 = key("break3"),
		vidOverlay = key("videoOverlay"),
		vidCont = key("vid-cont"),
		vidTut = key("vid-tut"),
		client = key("client"),
		rplName = key("rplName"),
		rplTitle = key("rplTitle"),
		rplNum1 = key("rplNum1"),
		rplNum2 = key("rplNum2"),
		rplNum3 = key("rplNum3"),
		rplExt1 = key("rplExt1"),
		rplExt2 = key("rplExt2"),
		rplEmail = key("rplEmail"),
		anchor = document.getElementsByTagName("a"),
		clientLink = key("client-link"),
		emHREF = anchor[1]; //References signature's # email address
		//console.log(emHREF);
		//console.log(numSwitch[selection].value);
		//vidTut.style.opacity = "0";
		vidOverlay.style.display = "none";

	//on submit
	function fluxCapacitate(){

		//captures client selected
		var numSwitch = key("numSwitch"),
		selection = numSwitch.selectedIndex;

		name = name.value;
		position = position.value;
		email = email.value;//Replaces # with whatever user enters
		email = email.toLowerCase();

		//number values are updated and the additional identifier is added
		number = "T: " + number.value;
		number2 = "T: " + number2.value;
		number3 = "C: " + number3.value;
		ext1 = ext1.value;
		ext2 = ext2.value;
		emHREF.href = "mailto:" + email;
		formPos.style.left = 0;
		fadedBG(blackBG, coloring, "block");
		rplNum1.style.display = "inline";
		rplNum2.style.display = "inline";
		rplNum3.style.display = "inline";

		
		switch(numSwitch[selection].value){
			case outlook10.value:
				textSwap(client,outlook10.name);
				replHTML(vidCont,"<source id='vid-tut' src='" + outlook10.link + "' type='video/mp4' />");
				break;
			case outlook13.value:
				textSwap(client,outlook13.name);
				replHTML(vidCont,"<source id='vid-tut' src='" + outlook13.link + "' type='video/mp4' />");
				break;
			case outlook11.value:
				textSwap(client,outlook11.name);
				replHTML(vidCont,"<source id='vid-tut' src='" + outlook11.link + "' type='video/mp4' />");
				break;
			case macMail.value:
				textSwap(client,macMail.name);
				replHTML(vidCont,"<source id='vid-tut' src='" + macMail.link + "' type='video/mp4' />");
				break;
			default:
				console.log("doesn't work!");
				break;
		}

		/*
		//////////////////////////////////////////////////////////

		if/else chain that:

		checks for empty inputs
		relays what information was entered into the inputs

		//////////////////////////////////////////////////////////
		*/

		//If numbers aren't entered, but extensions are, reset extensions
		if((number.length <= 3) && (number2.length <= 3)){
			ext1 = "";
			ext2 = "";
		}else if(number.length <= 3){
			ext1 = "";
		}else if(number2.length <= 3){
			ext2 = "";
		}

		//if name, position, number, and email are all valid entries
		if((name.length > 0) && (position.length >0) && (email.length > 0)){

			//Extension swaps (executed if extensions are entered)
			extSwap(rplExt1,ext1);
			extSwap(rplExt2,ext2);

			//Global textSwaps — those that'll be applied regardless of what numbers are omitted
			textSwap(rplName,name);
			textSwap(rplTitle,position);
			textSwap(rplEmail,email);

			//if All numbers have been entered
			if((number.length > 3) && (number2.length > 3) && (number3.length > 3)){

				//All other text swaps
				textSwap(rplNum1, number);
				textSwap(rplNum2, number2);
				textSwap(rplNum3, number3);

				//insert <br />
				replHTML(breakInsert, htmlBR);
				replHTML(breakInsert2, htmlBR);
				replHTML(breakInsert3, htmlBR);

				//Reload init()
				init();

			//if the first two numbers have been entered but not the cell
			}else if((number.length > 3) && (number2.length > 3) && (number3.length <= 3)){

				//All other text swaps
				textSwap(rplNum1,number);
				textSwap(rplNum2,number2);

				//insert <br />
				replHTML(breakInsert, htmlBR);
				replHTML(breakInsert2, htmlBR);
				replHTML(breakInsert3,'');

				//Turn off the 3rd number
				rplNum3.style.display = "none";

				//Reload init()
				init();

			//if the first telephone number has been entered but not the second number
			}else if((number.length > 3) && (number2.length <= 3) && (number3.length > 3)){

				//All other text swaps
				textSwap(rplNum1,number);
				textSwap(rplNum2,number2);
				textSwap(rplNum3,number3);

				//insert <br />
				replHTML(breakInsert, htmlBR);
				replHTML(breakInsert2,'');
				replHTML(breakInsert3, htmlBR);

				//Turn off the 2nd number
				rplNum2.style.display = "none";

				//Reload init()
				init();

			//if only the second and cell numbers have been entered
			}else if((number.length <= 3) && (number2.length > 3) && (number3.length > 3)){

				//All other text swaps
				textSwap(rplNum1,number);
				textSwap(rplNum2,number2);
				textSwap(rplNum3,number3);

				//insert <br />
				replHTML(breakInsert, '');
				replHTML(breakInsert2, htmlBR);
				replHTML(breakInsert3, htmlBR);

				//Turn off the 2nd number
				rplNum1.style.display = "none";

				//Reload init()
				init();

			//if only the first telephone number has been entered
			}else if((number.length > 3) && (number2.length <= 3) && (number3.length <= 3)){

				//All other text swaps
				textSwap(rplNum1,number);

				//insert <br />
				replHTML(breakInsert, htmlBR);
				replHTML(breakInsert2,'');
				replHTML(breakInsert3,'');

				//Turn off 2nd and 3rd numbers
				rplNum2.style.display = "none";
				rplNum3.style.display = "none";

				//Reload init()
				init();

			//if only the second number has been entered
			}else if((number.length <= 3) && (number2.length > 3) && (number3.length <= 3)){

				//All other text swaps
				textSwap(rplNum2,number2);

				//insert <br />
				replHTML(breakInsert, '');
				replHTML(breakInsert2, htmlBR);
				replHTML(breakInsert3, '');

				//Turn off 2nd and 3rd numbers
				rplNum1.style.display = "none";
				rplNum3.style.display = "none";

				//Reload init()
				init();

			//if only the cell has been entered
			}else if((number.length <= 3) && (number2.length <= 3) && (number3.length > 3)){

				//All other text swaps
				textSwap(rplNum3,number3);

				//insert <br />
				replHTML(breakInsert, '');
				replHTML(breakInsert2, '');
				replHTML(breakInsert3, htmlBR);

				//Turn off 2nd and 3rd numbers
				rplNum1.style.display = "none";
				rplNum2.style.display = "none";

				//Reload init()
				init();

			//if none of the numbers were entered
			}else if((number.length <= 3) && (number2.length <= 3) && (number3.length <= 3)){

				//All other text swaps
				textSwap(rplNum1,number);

				//insert <br />
				replHTML(breakInsert, '');
				replHTML(breakInsert2, '');
				replHTML(breakInsert3, '');

				//Turn off 2nd and 3rd numbers
				rplNum1.style.display = "none";
				rplNum2.style.display = "none";
				rplNum3.style.display = "none";

				//Reload init()
				init();
			}
		}else{
				alert("Bad Entry: one of your inputs was incorrect.");
		}
		setTimeout(function(){
			mite();
		},50);
		return false;
	}

	//close results
	function deAtomize(){
		if(formPos.style.left === "0px"){
			formPos.style.left = "-100%";
			fadedBG(blackBG,erasing,"none",500);
			vidIllum(vidCont,"0");
			setTimeout(function(){
				vidOverlay.style.display = "none";
			},50);
		}else{
			alert("FAIL!!!");//Just reassurance I haven't completely screwed up
		}
	}

	//close results
	function mite(){
		if(window.innerWidth > 1200){
			vidOverlay.style.display = "block";
					setTimeout(function(){
						vidIllum(vidCont,"1");
						console.log("before " + vidCont.width);
						vidCont.width = Math.floor(window.innerWidth * 0.5);
						vidCont.height = vidCont.width * 0.5625;
						vidCont.width = vidCont.width - 1;
						console.log("after " + vidCont.width);
					},50);
				
		}else if((window.innerWidth <= 1200) && (window.innerWidth > 992)){
			vidOverlay.style.display = "block";
					setTimeout(function(){
						vidIllum(vidCont,"1");
						console.log("before " + vidCont.width);
						vidCont.width = Math.floor(window.innerWidth * 0.35);
						vidCont.height = vidCont.width * 0.5625;
						vidCont.width = vidCont.width - 1;
						console.log("after " + vidCont.width);
					},50);
		}else{
			vidOverlay.style.display = "none";
		}
		return false;
	}

	function swarley(){
		if(window.innerWidth > 1200){
			console.log("before " + vidCont.width);
			vidCont.width = Math.floor(window.innerWidth * 0.5);
			vidCont.height = vidCont.width * 0.5625;
			vidCont.width = vidCont.width - 1;
			console.log("after " + vidCont.width);
		}else if(window.innerWidth <= 1200){
			vidCont.width = Math.floor(window.innerWidth * 0.35);
			vidCont.height = vidCont.width * 0.5625;
			vidCont.width = vidCont.width - 1;
		}
	}
	function vidPlay(){
		vidCont.play();
	}

	//events
	close.onclick = deAtomize;
	blackBG.onclick = deAtomize;
	form.onsubmit = fluxCapacitate;
	clientLink.onclick = vidPlay;
	window.onresize = swarley;
}
window.onload = init;