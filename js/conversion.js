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
	var out10Link = "https://www.meyersound.com/email/email_signature/distribution/video/PC_Outlook10.mp4",
		out13Link = "https://www.meyersound.com/email/email_signature/distribution/video/PC_Outlook13.mp4",
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
		//vidTut.style.opacity = "0";
		vidOverlay.style.display = "none";

	//on submit
	function fluxCapacitate(){

		var numSwitch = key("numSwitch"),
		selection = numSwitch.selectedIndex;

		name = name.value;
		position = position.value;
		email = email.value;//Replaces # with whatever user enters
		email = email.toLowerCase();
		
		number = phoneQC(number.value);
		number2 = phoneQC(number2.value);
		number3 = phoneQC(number3.value);

		//number values are updated and the additional identifier is added
		number = "T: " + number;
		number2 = "T: " + number2;
		number3 = "C: " + number3;
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
		vidCont.load();
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
			vidCont.pause();
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
						vidCont.width = Math.floor(window.innerWidth * 0.5);
						vidCont.height = vidCont.width * 0.5625;
						vidCont.width = vidCont.width - 1;
					},50);
				
		}else if((window.innerWidth <= 1200) && (window.innerWidth > 992)){
			vidOverlay.style.display = "block";
					setTimeout(function(){
						vidIllum(vidCont,"1");
						vidCont.width = Math.floor(window.innerWidth * 0.35);
						vidCont.height = vidCont.width * 0.5625;
						vidCont.width = vidCont.width - 1;
					},50);
		}else{
			vidOverlay.style.display = "none";
		}
	}

	function swarley(){
		if(window.innerWidth > 1200){
			vidCont.width = Math.floor(window.innerWidth * 0.5);
			vidCont.height = vidCont.width * 0.5625;
			vidCont.width = vidCont.width - 1;
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