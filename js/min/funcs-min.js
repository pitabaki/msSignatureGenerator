function key(e){"use strict";return"string"==typeof e?document.getElementById(e):void 0}function textSwap(e,t){"use strict";var n=document.getElementById(e);"undefined"!==n.textContent?n.textContent=t:n.innerText=t}function replHTML(e,t){"use strict";if("undefined"===e.id&&"string"==typeof t){console.log("replHTML if");var n=document.getElementById(e);n.innerHTML=t}else"undefined"!==e.id&&"string"==typeof t?(console.log("replHTML else if"),e.innerHTML=t):console.log("Fail!!! Function replHTML failed to pass variables presented to it.")}function fadedBG(e,t,n,o){"use strict";var i=document.getElementById(e);"undefined"==typeof o?(i.style.display=n,setTimeout(function(){i.style.backgroundColor=t},50)):(i.style.backgroundColor=t,setTimeout(function(){i.style.display=n},o))}function whatUp(e,t,n){"use strict";var o=document.getElementById(e);setTimeout(function(){o.style.marginTop=t},n)}function extSwap(e,t){"use strict";console.log("Passing "+e+" and "+t),0!==t.length?(console.log("If with "+t),t=" x"+t,textSwap(e,t)):(console.log("Else with "+t),t=" ",textSwap(e,t))}