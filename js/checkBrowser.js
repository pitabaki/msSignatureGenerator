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