function key(t){"use strict";return"string"==typeof t?document.getElementById(t):void 0}function textSwap(t,e){"use strict";var n=t;"undefined"!==n.textContent?n.textContent=e:n.innerText=e}function replHTML(t,e){"use strict";var n=t;"undefined"!==e?n.innerHTML=e:console.log("Fail!!! Function replHTML failed to pass variables presented to it.")}function fadedBG(t,e,n,o){"use strict";var s=document.getElementById(t);"undefined"==typeof o?(s.style.display=n,setTimeout(function(){s.style.backgroundColor=e},50)):(s.style.backgroundColor=e,setTimeout(function(){s.style.display=n},o))}function vidIllum(t,e,n,o,s){"use strict";var i=document.getElementById(t),l=document.getElementById(e);i.style.display=o,setTimeout(function(){l.style.opacity=n},50)}function whatUp(t,e,n){"use strict";var o=document.getElementById(t);setTimeout(function(){o.style.marginTop=e},n)}function extSwap(t,e){"use strict";console.log("Passing "+t+" and "+e),0!==e.length?(console.log("If with "+e),e=" x"+e,textSwap(t,e)):(console.log("Else with "+e),e=" ",textSwap(t,e))}function dropD(t,e){"use strict";if("string"==typeof t&&"string"==typeof e){var n=document.getElementById(t);n.src=e}else console.log("Link passed to dropD was not a string.")}