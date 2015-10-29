/*

Email Signature Generator

Developed by: Peter Berki
Developed for: Meyer Sound

*/

//Defined init Function (onload, do this)
function init(){
	'use strict';
	//Create Variables
	var name = document.getElementById("name"),
		position = document.getElementById("position"),
		number = document.getElementById("number"),
		email = document.getElementById("email"),
		form = document.getElementById("form"),
		br = "<br />",
		body = document.body,
		//builds the outer container
		container = "<table align='center' cellspacing='0' cellpadding='0' width='100%' style='width:100%;'>",
		closeContainer = "</table>",
		//builds top portion (dynamic portion)
		openRow = "<tr><td><table cellspacing='0' cellpadding='0' width='300' style='width:300px;'>",
		closeRow = "</table></td></tr>",
		//builds short row
		openSR = "<tr><td colspan='2'>",
		closeSR = "</td></tr>",
		//builds ard breaks
		brSpace = "<tr><td colspan='2' height='20'></td></tr>",
		output = document.getElementById("output"),
		nameHTML = "<span style='margin:0 auto;font-family:Helvetica,Arial,sans-serif;font-weight:normal;font-size:17px;line-height:22px;color:#222222;'>",
		closeSpanBR = "</span><br />",
		titleHTML = "<span style='margin:0 auto;font-family:Helvetica,Arial,sans-serif;font-weight:normal;font-size:14px;line-height:18px;color:#222222;'>",
		closeSpan = "</span>";

	//on submit
	function fluxCapacitate(){
		name = name.value;
		position = position.value;
		number = number.value;
		email = email.value;
		var rpl = container + openRow + brSpace + openSR + nameHTML + name + closeSpanBR + titleHTML + position + closeSpan + closeSR + closeRow + closeContainer;
		body.innerHTML = rpl;
		/*var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
			body.innerHTML = xhttp.responseText;
			}
		};
		xhttp.open("GET", "www.meyersound.com/email/email_signature/distribution/html/sign.html", true);
		xhttp.send();*/
		return false;
	}
	form.onsubmit = fluxCapacitate;
}
window.onload = init;