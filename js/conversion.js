/*

Email Signature Generator

Developed by: Peter Berki
Developed for: Meyer Sound

*/

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
		ext1 = document.getElementById("ext1"),
		ext2 = document.getElementById("ext2"),
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
		breakInsert3 = document.getElementById("break3"),
		rplName = "rplName",
		rplTitle = "rplTitle",
		rplNum1 = "rplNum1",
		rplNum2 = "rplNum2",
		rplNum3 = "rplNum3",
		rplExt1 = "rplExt1",
		rplExt2 = "rplExt2",
		rplEmail = "rplEmail",
		anchor = document.getElementsByTagName("a"),
		emHREF = anchor[0]; //References signature's # email address
		//Will replace # with whatever user enters
	//on submit
	function fluxCapacitate(){
		name = name.value;
		position = position.value;
		email = email.value;
		email = email.toLowerCase();
		//number values are updated and the additional
		number = "T: " + number.value;
		number2 = "T: " + number2.value;
		number3 = "C: " + number3.value;
		ext1 = ext1.value;
		ext2 = ext2.value;
		emHREF.href = "mailto:" + email;
		formPos.style.left = 0;
		fadedBG("blackBG", coloring, "block");
		whatUp("copyPaste","0", 250);
		document.getElementById(rplNum2).style.display = "inline";
		document.getElementById(rplNum3).style.display = "inline";
		//if name, position, number, and email are all valid entries
		if((name.length > 0) && (position.length >0) && (number.length > 3) && (email.length > 0)){


			//if a second number and a cell have been entered
			if((number2.length > 3) && (number3.length > 3)){

				//Extension swaps (executed if extensions are entered)
				extSwap(rplExt1,ext1);
				extSwap(rplExt2,ext2);

				//All other text swaps
				textSwap(rplName,name);
				textSwap(rplTitle,position);
				textSwap(rplNum1,number);
				textSwap(rplNum2,number2);
				textSwap(rplNum3,number3);
				textSwap(rplEmail,email);

				//insert <br />
				breakInsert.innerHTML = htmlBR;
				breakInsert2.innerHTML = htmlBR;
				breakInsert3.innerHTML = htmlBR;

				//Reload init()
				init();

			//if a second number has been entered but not the cell
			}else if((number2.length > 3) && (number3.length <= 3)){

				//Extension swaps (executed if extensions are entered)
				extSwap(rplExt1,ext1);
				extSwap(rplExt2,ext2);

				//All other text swaps
				textSwap(rplName,name);
				textSwap(rplTitle,position);
				textSwap(rplNum1,number);
				textSwap(rplNum2,number2);
				textSwap(rplEmail,email);

				//insert <br />
				breakInsert.innerHTML = htmlBR;
				breakInsert2.innerHTML = htmlBR;
				breakInsert3.innerHTML = '';

				//Turn off the 3rd number
				document.getElementById(rplNum3).style.display = "none";

				//Reload init()
				init();

			//if the cell has been entered but not the second number
			}else if((number2.length <= 3) && (number3.length > 3)){

				//Extension swaps (executed if extensions are entered)
				extSwap(rplExt1,ext1);
				extSwap(rplExt2,ext2);

				//All other text swaps
				textSwap(rplName,name);
				textSwap(rplTitle,position);
				textSwap(rplNum1,number);
				textSwap(rplNum2,number2);
				textSwap(rplNum3,number3);
				textSwap(rplEmail,email);

				//insert <br />
				breakInsert.innerHTML = htmlBR;
				breakInsert2.innerHTML = '';
				breakInsert3.innerHTML = htmlBR;

				//Turn off the 2nd number
				document.getElementById(rplNum2).style.display = "none";

				//Reload init()
				init();

			//if neither a second number nor a cell is present
			}else if((number2.length <= 3) && (number3.length <= 3)){

				//Extension swaps (executed if extensions are entered)
				extSwap(rplExt1,ext1);
				extSwap(rplExt2,ext2);

				//All other text swaps
				textSwap(rplName,name);
				textSwap(rplTitle,position);
				textSwap(rplNum1,number);
				textSwap(rplEmail,email);

				//insert <br />
				breakInsert.innerHTML = htmlBR;
				breakInsert2.innerHTML = '';
				breakInsert3.innerHTML = '';

				//Turn off 2nd and 3rd numbers
				document.getElementById(rplNum2).style.display = "none";
				document.getElementById(rplNum3).style.display = "none";

				//Reload init()
				init();
			}
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