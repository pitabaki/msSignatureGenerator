var isFirefox="undefined"!=typeof InstallTrigger,isIE=!!document.documentMode,fireOverlay=key("firefox-overlay"),error=key("error"),fireBG=key("fireBG"),browser=key("browser");isFirefox===!0?(fireOverlay.style.display="block",textSwap(browser,"Firefox"),setTimeout(function(){fireBG.style.opacity="0.75"},100),setTimeout(function(){error.style.top="-100px"},500)):isIE===!0&&(fireOverlay.style.display="block",textSwap(browser,"Internet Explorer"),setTimeout(function(){fireBG.style.opacity="0.75"},100),setTimeout(function(){error.style.top="-100px"},500));