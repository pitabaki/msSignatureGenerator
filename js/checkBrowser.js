//Check active browser

var isFirefox = typeof InstallTrigger !== 'undefined', // Firefox
	isIE = false || !!document.documentMode;   // Internet Explorer

var fireOverlay = key("firefox-overlay"),
	error = key("error"),
	fireBG = key("fireBG"),
	browser = key("browser");
/*
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
var isChrome = !!window.chrome && !isOpera;*/

if(isFirefox === true){
	fireOverlay.style.display = "block";
	textSwap(browser,"Firefox");
	setTimeout(function(){
		fireBG.style.opacity = "0.75";
	}, 100);
	setTimeout(function(){
		error.style.top = "-100px";
	}, 500);
}else if(isIE === true){
	fireOverlay.style.display = "block";
	textSwap(browser,"Internet Explorer");
	setTimeout(function(){
		fireBG.style.opacity = "0.75";
	}, 100);
	setTimeout(function(){
		error.style.top = "-100px";
	}, 500);
}