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
		erasing = "rgba(0,0,0,0)",
		htmlBR = "<br />",
		breakInsert = key("break"),
		breakInsert2 = key("break2"),
		breakInsert3 = key("break3"),
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

		var stuff = '';
		console.log("name".id);
	//on submit
	function fluxCapacitate(){
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
		fadedBG("blackBG", coloring, "block");
		whatUp("copyPaste","0", 250);
		document.getElementById(rplNum1).style.display = "inline";
		document.getElementById(rplNum2).style.display = "inline";
		document.getElementById(rplNum3).style.display = "inline";
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
				textSwap(rplNum1,number);
				textSwap(rplNum2,number2);
				textSwap(rplNum3,number3);

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
				replHTML(breakInsert3, '');

				//Turn off the 3rd number
				document.getElementById(rplNum3).style.display = "none";

				//Reload init()
				init();

			//if the first telephone number has been entered but not the cell
			}else if((number.length > 3) && (number2.length <= 3) && (number3.length > 3)){

				//All other text swaps
				textSwap(rplNum1,number);
				textSwap(rplNum2,number2);
				textSwap(rplNum3,number3);

				//insert <br />
				replHTML(breakInsert, htmlBR);
				replHTML(breakInsert2, '');
				replHTML(breakInsert3, htmlBR);

				//Turn off the 2nd number
				document.getElementById(rplNum2).style.display = "none";

				//Reload init()
				init();

			//if only the first telephone number has been entered
			}else if((number.length > 3) && (number2.length <= 3) && (number3.length <= 3)){

				//All other text swaps
				textSwap(rplNum1,number);

				//insert <br />
				replHTML(breakInsert, htmlBR);
				replHTML(breakInsert2, '');
				replHTML(breakInsert3, '');

				//Turn off 2nd and 3rd numbers
				document.getElementById(rplNum2).style.display = "none";
				document.getElementById(rplNum3).style.display = "none";

				//Reload init()
				init();

			//if only the cell has been entered
			}else if((number.length <= 3) && (number2.length <= 3) && (number3.length > 3)){

				//All other text swaps
				textSwap(rplNum1,number);

				//insert <br />
				replHTML(breakInsert, '');
				replHTML(breakInsert2, '');
				replHTML(breakInsert3, htmlBR);

				//Turn off 2nd and 3rd numbers
				document.getElementById(rplNum1).style.display = "none";
				document.getElementById(rplNum2).style.display = "none";

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
				document.getElementById(rplNum1).style.display = "none";
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